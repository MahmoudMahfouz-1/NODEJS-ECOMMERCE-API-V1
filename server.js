const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');
const { rateLimit } = require('express-rate-limit');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

dotenv.config();

const dbConnection = require('./config/dbConnection');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./Middlewares/globalErrorHandler');

// Routes
const mountRoutes = require('./routes');
const { webhookCheckout } = require('./controllers/orderController');
// connect to database
dbConnection();

const app = express();

// Used to compress response
app.use(compression());

// Enable CORS configurations
app.use(cors());
app.options('*', cors());
// Middlewares
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webhookCheckout
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`Current Mode is ${process.env.NODE_ENV}`);
}

// limiting the maximum size of the body of the request
app.use(express.json({ limit: '20kb' }));
app.use(express.static(__dirname, { path: 'uploads' }));

// prevent MongoDB Operator Injection.
app.use(mongoSanitize());
app.use(xss());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  message: 'You can only make 15 requests every hour.',
});
app.use('/api', limiter);

// Express middleware to protect against HTTP Parameter Pollution attacks
app.use(
  hpp({
    whitelist: [
      'sold',
      'price',
      'ratingsAverage',
      'ratingsQuantity',
      'quantity',
    ],
  })
);
// Mount Routes
mountRoutes(app);

app.all('*', (req, res, next) => {
  next(new AppError(`No Path with This URL: ${req.originalUrl}`, 404));
});

// Global Error Handling Middleware for Express Errors
app.use(globalErrorHandler);

const { PORT } = process.env;
const server = app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

// handling Rejections outside express
process.on('unhandledRejection', (err) => {
  console.log(`unhandledRejection ${err.name} | ${err.message}`);
  server.close(() => {
    console.log(`Shutting down...`);
    process.exit(1);
  });
});
