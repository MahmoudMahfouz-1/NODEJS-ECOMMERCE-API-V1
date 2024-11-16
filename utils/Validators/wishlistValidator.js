const { check } = require('express-validator');
const expressValidator = require('../../Middlewares/expressValidator');
const Product = require('../../models/productModel');

const addProductToWishListValidator = [
  check('productId')
    .isMongoId()
    .withMessage('Invalid MongoDB ID Format')
    .custom(async (val, { req }) => {
      const product = await Product.findById(val);
      if (!product) {
        throw new Error('There is No Product with this ID');
      }
      return true;
    }),

  expressValidator,
];

const removeProductfromWishListValidator = [
  check('productId')
    .isMongoId()
    .withMessage('Invalid MongoDB ID Format')
    .custom(async (val, { req }) => {
      const product = await Product.findById(val);
      if (!product) {
        throw new Error('There is No Product with this ID');
      }
      return true;
    }),

  expressValidator,
];

module.exports = {
  addProductToWishListValidator,
  removeProductfromWishListValidator,
};
