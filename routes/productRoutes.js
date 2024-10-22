const express = require('express');
const productControllers = require('../controllers/productController');
const productValidator = require('../utils/Validators/productValidator');

const router = express.Router();

router
  .route('/')
  .post(productValidator.addProductValidator, productControllers.addProduct)
  .get(productControllers.getProducts);

router
  .route('/:id')
  .get(productValidator.getProductValidator, productControllers.getProduct)
  .put(
    productValidator.updateProductValidator,
    productControllers.updateProduct
  )
  .delete(
    productValidator.deleteProductValidator,
    productControllers.deleteProduct
  );

module.exports = router;
