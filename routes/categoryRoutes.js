const express = require('express');
const categoryControllers = require('../controllers/categoryController');
const CategoryValidator = require('../utils/Validators/categoryValidator');
const subCategoryRouter = require('./subCategoryRoutes');
const authController = require('../controllers/authController');

const router = express.Router();

// Associate subcategories with each category
router.use('/:categoryId/subcategories', subCategoryRouter);

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    categoryControllers.uploadImage,
    categoryControllers.resizeImage,
    CategoryValidator.addCategoryValidator,
    categoryControllers.addCategory
  )
  .get(categoryControllers.getCategories);

router
  .route('/:id')
  .get(CategoryValidator.getCategoryValidator, categoryControllers.getCategory)
  .put(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    categoryControllers.uploadImage,
    categoryControllers.resizeImage,
    CategoryValidator.updateCategoryValidator,
    categoryControllers.UpdateCategory
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin'),
    CategoryValidator.deleteCategoryValidator,
    categoryControllers.deleteCategory
  );

module.exports = router;
