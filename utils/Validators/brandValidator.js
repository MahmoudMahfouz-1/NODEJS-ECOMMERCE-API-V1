const { check } = require('express-validator');

const expressValidator = require('../../Middlewares/expressValidator');

const getBrandValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const addBrandValidator = [
  check('name')
    .notEmpty()
    .withMessage('Brand is required')
    .isLength({ min: 3 })
    .withMessage('Brand name is too short')
    .isLength({ max: 32 })
    .withMessage('Brand name is too Long'),
  expressValidator,
];

const updateBrandValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const deleteBrandValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];
module.exports = {
  getBrandValidator,
  addBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
};
