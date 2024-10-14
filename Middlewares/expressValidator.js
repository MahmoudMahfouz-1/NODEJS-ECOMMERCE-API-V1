const { validationResult } = require('express-validator');
const httpStatusText = require('../utils/httpStatusText');

const expressValidator = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.json({ status: httpStatusText.ERROR, errors: result.array() });
  }
  next();
};

module.exports = expressValidator;
