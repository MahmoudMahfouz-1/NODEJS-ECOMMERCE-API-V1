const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const subCategoryValidator = require('../utils/Validators/subCategoryValidator');
const { setCategoryIdToBody } = require('../Middlewares/setCategoryIdToBody');
const { filterObject } = require('../Middlewares/filterObject');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    setCategoryIdToBody,
    subCategoryValidator.addSubCategoryValidator,
    subCategoryController.addSubCategory
  )
  .get(filterObject, subCategoryController.getSubCategories);

router
  .route('/:id')
  .get(
    subCategoryValidator.getSubCategoryValidator,
    subCategoryController.getSubCategory
  )
  .put(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    subCategoryValidator.updateSubCategoryValidator,
    subCategoryController.updateSubCategory
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin'),
    subCategoryValidator.deleteSubCategoryValidator,
    subCategoryController.deleteSubCategory
  );

module.exports = router;
