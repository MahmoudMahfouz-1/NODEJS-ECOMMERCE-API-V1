const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const categoryRouter = require('./routes/categoryRoutes');
const subCategoryRouter = require('./routes/subCategoryRoutes');
const brandRouter = require('./routes/brandRoutes');
const dbConnection = require('./config/dbConnection');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./Middlewares/globalErrorHandler');
// connect to database
dbConnection();

const app = express();
// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`Current Mode is ${process.env.NODE_ENV}`);
}
app.use(express.json());

// routes
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/subcategories', subCategoryRouter);
app.use('/api/v1/brands', brandRouter);

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
