const express = require('express');
const brandControllers = require('../controllers/brandController');
const brandValidator = require('../utils/Validators/brandValidator');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    brandControllers.uploadImage,
    brandControllers.resizeImage,
    brandValidator.addBrandValidator,
    brandControllers.addBrand
  )
  .get(brandControllers.getBrands);

router
  .route('/:id')
  .get(brandValidator.getBrandValidator, brandControllers.getBrand)
  .put(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    brandControllers.uploadImage,
    brandControllers.resizeImage,
    brandValidator.updateBrandValidator,
    brandControllers.UpdateBrand
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin'),
    brandValidator.deleteBrandValidator,
    brandControllers.deleteBrand
  );

module.exports = router;
