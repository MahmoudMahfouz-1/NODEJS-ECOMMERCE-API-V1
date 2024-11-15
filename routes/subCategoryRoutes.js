const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const subCategoryValidator = require('../utils/Validators/subCategoryValidator');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

const setCategoryIdToBody = (req, res, next) => {
  if (!req.body.category) {
    req.body.category = req.params.categoryId;
  }
  next();
};

const filterObject = (req, res, next) => {
  if (req.params.categoryId) {
    req.filterObj = { category: req.params.categoryId };
  } else {
    req.filterObj = {};
  }
  next();
};

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
