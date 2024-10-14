const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const subCategoryValidator = require('../utils/Validators/subCategoryValidator');
const { setCategoryIdToBody } = require('../Middlewares/setCategoryIdToBody');
const { filterObject } = require('../Middlewares/filterObject');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(
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
    subCategoryValidator.updateSubCategoryValidator,
    subCategoryController.updateSubCategory
  )
  .delete(
    subCategoryValidator.deleteSubCategoryValidator,
    subCategoryController.deleteSubCategory
  );

module.exports = router;
