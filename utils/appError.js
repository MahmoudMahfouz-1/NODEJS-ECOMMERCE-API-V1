const httpStatusText = require('./httpStatusText');

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4)
      ? httpStatusText.FAIL
      : httpStatusText.ERROR;
  }
}

module.exports = AppError;
