const jwt = require('jsonwebtoken');

const generateToken = (payload) =>
  jwt.sign({ payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });

module.exports = generateToken;
