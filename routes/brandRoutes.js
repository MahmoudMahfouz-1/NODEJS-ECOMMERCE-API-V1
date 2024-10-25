const express = require('express');
const brandControllers = require('../controllers/brandController');
const brandValidator = require('../utils/Validators/brandValidator');

const router = express.Router();

router
  .route('/')
  .post(
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
    brandControllers.uploadImage,
    brandControllers.resizeImage,
    brandValidator.updateBrandValidator,
    brandControllers.UpdateBrand
  )
  .delete(brandValidator.deleteBrandValidator, brandControllers.deleteBrand);

module.exports = router;
