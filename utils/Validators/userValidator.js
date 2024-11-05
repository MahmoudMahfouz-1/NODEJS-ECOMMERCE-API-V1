const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const slugify = require('slugify');
const expressValidator = require('../../Middlewares/expressValidator');
const User = require('../../models/userModel');

const addUserValidator = [
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

  check('profileImg').optional(),

  check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Phone must be EG or SA only'),

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

const changeUserPasswordValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  check('currentPassword')
    .notEmpty()
    .withMessage('You Must Enter currentPassword'),
  check('passwordConfirm')
    .notEmpty()
    .withMessage('You Must Enter passwordConfirm'),
  check('password')
    .notEmpty()
    .withMessage('You Must Enter password')
    .custom(async (val, { req }) => {
      // 1 verify the password
      const user = await User.findById(req.params.id);
      if (!user) {
        throw new Error('there is no user with this ID');
      }
      const isCorrect = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      );
      if (!isCorrect) {
        throw new Error('Wrong Password for this user');
      }

      // 2 password confirm = password
      if (val !== req.body.passwordConfirm) {
        throw new Error('PasswordConfirm is incorrect');
      }
      return true;
    }),
  expressValidator,
];

const getUserValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const updateUserValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  body('name').custom((val, { req }) => {
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

  check('profileImg').optional(),

  check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Phone must be EG or SA only'),

  expressValidator,
];

const deleteUserValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const updateLoggedUserValidator = [
  body('name').custom((val, { req }) => {
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

  check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Phone must be EG or SA only'),

  expressValidator,
];
module.exports = {
  getUserValidator,
  addUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
  updateLoggedUserValidator,
};
