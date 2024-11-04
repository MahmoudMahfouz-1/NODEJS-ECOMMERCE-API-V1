const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const httpStatusText = require('../utils/httpStatusText');
const AppError = require('../utils/appError');
const { sendMail } = require('../utils/sendMail');

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

  const token = generateToken(user._id);
  res.status(201).json({ status: httpStatusText.SUCCESS, data: user, token });
});

//@desc     login
//@route    POST /api/v1/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res, next) => {
  // verify email and password
  const user = await User.findOne({ email: req.body.email });
  const isCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!user || !isCorrect) {
    return next(new AppError('invalid Credentials', 400));
  }

  const token = generateToken(user._id);
  res.status(200).json({ status: httpStatusText.SUCCESS, data: user, token });
});

//@desc     verifyToken => verifies the token to know wether it's valid or not
//@access   Private
exports.verifyToken = asyncHandler(async (req, res, next) => {
  // 1) catch token and verify it
  let token;
  if (req.headers.authorization || req.headers.Authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Please login to access this route', 401));
  }
  // 2) verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  // 3) check if user exists
  const currentUser = await User.findById(decoded.payload);
  if (!currentUser) {
    return next(new AppError('The token used has no user', 401));
  }

  // 4) check if the user has changed the password after the token was generated
  // console.log(decoded.iat);
  const passChangedAt = parseInt(
    currentUser.passChangedAt.getTime() / 1000,
    10
  );
  if (passChangedAt > decoded.iat) {
    return next(
      new AppError(
        'Password have changed after login, Please Login again ... ',
        401
      )
    );
  }

  req.user = currentUser;
  next();
});

//@desc     Checks the roles (Authoraization)
//@access   Private

exports.allowedTo = (...roles) =>
  asyncHandler(async (req, res, next) => {
    console.log(roles);
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(new AppError("you aren't to access this route", 403));
    }
    next();
  });

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  // find user using the email sent in req.body
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new AppError(`There is no user with this email ${req.body.email}`, 404)
    );
  }
  // generate random number of 6 digits and store it in the DB
  const resetCode = Math.floor(Math.random() * 1000000).toString();
  const hashedRestCode = crypto
    .createHmac('sha256', process.env.JWT_SECRET_KEY)
    .update(resetCode)
    .digest('hex');

  // store the code in the DB
  user.passwordRestCode = hashedRestCode;
  user.passwordResetExpire = Date.now() + 10 * 60 * 1000; // 10m expiration time
  user.passwordResetVerified = false;

  user.save();
  // send the code via email
  const message = `Hi ${user.name}\n your reset code is\n\n${resetCode}\n\nknow that the code is valid for only 10min\nThe E-shop Team\n`;
  try {
    await sendMail({
      to: user.email,
      subject: 'Password Reset Code <E-Shop>',
      text: message,
    });
  } catch (error) {
    user.passwordRestCode = undefined;
    user.passwordResetExpire = undefined;
    user.passwordResetVerified = undefined;
    user.save();
    return next(new AppError('There is an error in sending email', 500));
  }

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: `A reset code have been sent to your Email ${user.email}`,
  });
});
