const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');

dotenv.config();

const dbConnection = require('./config/dbConnection');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./Middlewares/globalErrorHandler');

// Routes
const mountRoutes = require('./routes');

// connect to database
dbConnection();

const app = express();

// Used to compress response
app.use(compression());

// Enable CORS configurations
app.use(cors());
app.options('*', cors());
// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`Current Mode is ${process.env.NODE_ENV}`);
}
app.use(express.json());
app.use(express.static(__dirname, { path: 'uploads' }));

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
