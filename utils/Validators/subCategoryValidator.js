const { check } = require('express-validator');

const expressValidator = require('../../Middlewares/expressValidator');

const getSubCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const addSubCategoryValidator = [
  check('name')
    .notEmpty()
    .withMessage('SubCategory is required')
    .isLength({ min: 3 })
    .withMessage('SubCategory name is too short')
    .isLength({ max: 32 })
    .withMessage('SubCategory name is too Long'),
  check('category')
    .notEmpty()
    .withMessage('category ID is required')
    .isMongoId()
    .withMessage('category must be Mongo ObjectID'),
  expressValidator,
];

const updateSubCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const deleteSubCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];
module.exports = {
  getSubCategoryValidator,
  addSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
};
