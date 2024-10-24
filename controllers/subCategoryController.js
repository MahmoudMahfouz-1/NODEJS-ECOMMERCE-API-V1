const SubCategory = require('../models/subCategoryModel');
const factory = require('./handlersFactory');

//@desc     create new sub category
//@route    POST /api/v1/subcategories
//@access   Private
const addSubCategory = factory.createOne(SubCategory);

//@desc     get list of subcategories
//@route    GET /api/v1/subcategories
//@access   Public
const getSubCategories = factory.getAll(SubCategory);

//@desc     Get subcategory by id
//@route    GET /api/v1/subcategories/:id
//@access   Public
const getSubCategory = factory.getOne(SubCategory);

//@desc     Update subcategory by id
//@route    PUT /api/v1/subcategories/:id
//@access   Private
const updateSubCategory = factory.updateOne(SubCategory);

//@desc     Delete subcategory by id
//@route    DELETE /api/v1/subcategories/:id
//@access   Private
const deleteSubCategory = factory.deleteOne(SubCategory);

module.exports = {
  addSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
