const { check } = require('express-validator');
const expressValidator = require('../../Middlewares/expressValidator');
const Review = require('../../models/reviewModel');

const addReviewValidator = [
  check('title').optional(),
  check('ratings')
    .notEmpty()
    .withMessage('Ratings is required')
    .isFloat({ min: 0, max: 5 })
    .withMessage('Rating range must be between 0 and 5'),
  check('user').isMongoId().withMessage('Invalid MongoDB ID Format'),
  check('product')
    .isMongoId()
    .withMessage('Invalid MongoDB ID Format')
    .custom(async (val, { req }) => {
      const review = await Review.findOne({
        user: req.user._id,
        product: req.body.product,
      });
      if (review) {
        throw new Error('You have already created a review for this Product');
      }
      return true;
    }),
  expressValidator,
];

const updateReviewValidator = [
  check('id')
    .isMongoId()
    .withMessage('Invalid MongoDB ID Format')
    .custom(async (val, { req }) => {
      const review = await Review.findById(val);
      if (!review) {
        throw new Error('There is no review with this Id');
      }
      if (review.user._id.toString() !== req.user._id.toString()) {
        throw new Error('You are not allowed to perform this action');
      }
      return true;
    }),
  check('ratings')
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage('Rating range must be between 0 and 5'),

  expressValidator,
];

const deleteReviewValidator = [
  check('id')
    .isMongoId()
    .withMessage('Invalid MongoDB ID Format')
    .custom(async (val, { req }) => {
      if (req.user.role === 'user') {
        const review = await Review.findById(val);
        if (!review) {
          throw new Error('There is no review with this Id');
        }

        if (review.user.toString() !== req.user._id.toString()) {
          throw new Error('You are not allowed to perform this action');
        }
      }
      return true;
    }),
  expressValidator,
];

const getReviewValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];
module.exports = {
  getReviewValidator,
  addReviewValidator,
  updateReviewValidator,
  deleteReviewValidator,
};
