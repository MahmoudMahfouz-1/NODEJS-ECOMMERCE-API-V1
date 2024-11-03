const { check } = require('express-validator');
const slugify = require('slugify');
const expressValidator = require('../../Middlewares/expressValidator');
const User = require('../../models/userModel');

const signupValidator = [
  check('name')
    .notEmpty()
    .withMessage('User is required')
    .isLength({ min: 3 })
    .withMessage('User name is too short')
    .custom((val, { req }) => {
      req.body.slug = slugify(val, { lower: true });
      return true;
    }),
  check('email')
    .isEmail()
    .withMessage('Must be an E-mail')
    .custom(async (val) => {
      const user = await User.findOne({ email: val });
      if (user) {
        throw new Error('Email Already in Use');
      }
      return true;
    }),
  check('role').optional(),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Passowrd must be atleast 6 chars')
    .custom((val, { req }) => {
      if (val !== req.body.passwordConfirm) {
        throw new Error('PasswordConfirm is incorrect');
      }
      return true;
    }),
  check('passwordConfirm')
    .notEmpty()
    .withMessage('passwordConfirm is required'),
  expressValidator,
];

const loginValidator = [
  check('email').isEmail().withMessage('Must be an E-mail'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Passowrd must be atleast 6 chars'),

  expressValidator,
];
module.exports = {
  signupValidator,
  loginValidator,
};
