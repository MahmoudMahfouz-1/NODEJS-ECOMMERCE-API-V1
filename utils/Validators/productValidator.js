const { check } = require('express-validator');

const expressValidator = require('../../Middlewares/expressValidator');
const Category = require('../../models/categoryModel');
const subCategory = require('../../models/subCategoryModel');

const addProductValidator = [
  check('title')
    .notEmpty()
    .withMessage('product title must be added')
    .isLength({ min: 3 })
    .withMessage('product name is too short')
    .isLength({ max: 128 })
    .withMessage('product title is too long'),
  check('description')
    .notEmpty()
    .withMessage('Product descreption is required')
    .isLength({ min: 10 })
    .withMessage('Product description is too short')
    .isLength({ max: 512 })
    .withMessage('Product description is too long'),
  check('quantity')
    .notEmpty()
    .withMessage('Product quantity is required')
    .isNumeric()
    .withMessage('Product quantity must be a number'),
  check('sold')
    .optional()
    .isNumeric()
    .withMessage('Sold items must be a number'),
  check('price')
    .notEmpty()
    .withMessage('Product price is required')
    .isNumeric()
    .withMessage('Product price must be a number'),
  check('priceAfterDiscount')
    .optional()
    .isNumeric()
    .toFloat()
    .withMessage('Product price after discount must be a number')
    .custom((value, { req }) => {
      if (req.body.price <= value) {
        throw new Error('Price after discount should be greater than price');
      }
      return true;
    }),
  check('colors')
    .optional()
    .isArray()
    .withMessage('Colors should be an Array of strings'),
  check('imageCover').notEmpty().withMessage('Image Cover is requried'),
  check('images')
    .optional()
    .isArray()
    .withMessage('Images should be an Array of strings'),
  check('category')
    .notEmpty()
    .isMongoId()
    .withMessage('category Must be Mongo ID')
    .custom(async (categoryId) => {
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error(`This category Id doesn't exist ID: ${categoryId}`);
      }
      return true;
    }),
  check('subcategory')
    .optional()
    .isMongoId()
    .withMessage('Invalid ID Format')
    .custom(async (subCategoryIds) => {
      const result = await subCategory.find({
        _id: { $exists: true, $in: subCategoryIds },
      });
      if (result.length !== subCategoryIds.length) {
        throw new Error(
          `Some subcategory Id doesn't exist ID: ${subCategoryIds.join(', ')}`
        );
      }
      return true;
    })
    .custom(async (subCategoryIds, { req }) => {
      // we want to make sure that the subCategories we get already belong to the Main Category if NOT then ERROR
      // 1- Get All the Sub Categories that belong to category ID we already have
      const categoryId = req.body.category;
      const existingSubcategories = await subCategory.find({
        category: categoryId,
      });
      const existingSubcategoryIds = [];
      existingSubcategories.forEach((val) => {
        existingSubcategoryIds.push(val._id.toString());
      });
      // 2- Check if the Subcategories we get already belong to the Main Category if NOT then ERROR
      const checker = subCategoryIds.every((id) =>
        existingSubcategoryIds.includes(id)
      );
      if (!checker) {
        throw new Error(
          `Some subcategory Id doesn't belong to the Main Category ID: ${categoryId}`
        );
      }
      return true;
    }),
  check('brand').optional().isMongoId().withMessage('Invalid ID Format'),
  check('ratingsAverage')
    .optional()
    .isNumeric()
    .withMessage('ratingAverage must be a number')
    .isLength({ min: 1 })
    .withMessage('ratingAverage Must be above or equal 1.0')
    .isLength({ max: 5 })
    .withMessage('ratingAverage must be below or equal 5'),
  check('ratingsQuantity')
    .optional()
    .isNumeric()
    .withMessage('ratingAverage must be a number'),
  expressValidator,
];

const getProductValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const updateProductValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

const deleteProductValidator = [
  check('id').isMongoId().withMessage('Invalid MongoDB ID Format'),
  expressValidator,
];

module.exports = {
  addProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
};
