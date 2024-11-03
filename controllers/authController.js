const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const httpStatusText = require('../utils/httpStatusText');
const AppError = require('../utils/appError');

const generateToken = (payload) =>
  jwt.sign({ payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });

//@desc     signup
//@route    POST /api/v1/auth/signup
//@access   Public
exports.signup = asyncHandler(async (req, res, next) => {
  // create user using name, email , password
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Generate Token
  const token = generateToken(user._id);
  res.status(201).json({ status: httpStatusText.SUCCESS, data: user, token });
});

//@desc     login
//@route    POST /api/v1/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res, next) => {
  // verify email and password
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    next(new AppError('invalid Credentials', 400));
  }
  const token = generateToken(user._id);
  res.status(201).json({ status: httpStatusText.SUCCESS, data: user, token });
});
