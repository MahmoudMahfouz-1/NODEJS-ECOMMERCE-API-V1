const { check } = require('express-validator');

const expressValidator = require('../../Middlewares/expressValidator');

const getCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const addCategoryValidator = [
  check('name')
    .notEmpty()
    .withMessage('Category is required')
    .isLength({ min: 3 })
    .withMessage('Category name is too short')
    .isLength({ max: 32 })
    .withMessage('Category name is too Long'),
  expressValidator,
];

const updateCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const deleteCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];
module.exports = {
  getCategoryValidator,
  addCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
};
