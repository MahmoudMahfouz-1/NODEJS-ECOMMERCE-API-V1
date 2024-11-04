const AppError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');

const sendErrorForDev = (err, res) =>
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });

const handleInvalidToken = () =>
  new AppError('Invalid Token Please Login again... ', 401);
const handleJwtExpire = () =>
  new AppError('Token Expired Please Login again... ', 401);
const sendErrorForProd = (err, res) => {
  if (err.name === 'TokenExpiredError') err = handleJwtExpire();
  if (err.name === 'JsonWebTokenError') err = handleInvalidToken();
  err = res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || httpStatusText.ERROR;
  if (process.env.NODE_ENV === 'development') {
    sendErrorForDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorForProd(err, res);
  }
};

module.exports = globalErrorHandler;
