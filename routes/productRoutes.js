const express = require('express');
const productControllers = require('../controllers/productController');
const productValidator = require('../utils/Validators/productValidator');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    productControllers.uploadImages,
    productControllers.resizeImages,
    productValidator.addProductValidator,
    productControllers.addProduct
  )
  .get(productControllers.getProducts);

router
  .route('/:id')
  .get(productValidator.getProductValidator, productControllers.getProduct)
  .put(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    productValidator.updateProductValidator,
    productControllers.updateProduct
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin'),
    productValidator.deleteProductValidator,
    productControllers.deleteProduct
  );

module.exports = router;
