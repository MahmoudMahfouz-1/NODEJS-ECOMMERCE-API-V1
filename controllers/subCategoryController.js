const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

const httpStatusText = require('../utils/httpStatusText');
const subCategory = require('../models/subCategoryModel');
const AppError = require('../utils/appError');

//@desc     create new sub category
//@route    POST /api/v1/subcategories
//@access   Private
const addSubCategory = asyncHandler(async (req, res, next) => {
  const { name, category } = req.body;
  if (!name || !category) {
    next(new AppError('Invalid Input please add name or category', 400));
  }
  const subcategory = await subCategory.create({
    name,
    slug: slugify(name),
    category,
  });
  res.status(201).json({ status: httpStatusText.SUCCESS, data: subcategory });
});

//@desc     get list of subcategories
//@route    GET /api/v1/subcategories
//@access   Public
const getSubCategories = asyncHandler(async (req, res) => {
  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;

  const subCategories = await subCategory
    .find(req.filterObject)
    .skip(skip)
    .limit(limit);
  res
    .status(200)
    .json({ results: subCategories.length, page, data: subCategories });
});

//@desc     Get subcategory by id
//@route    GET /api/v1/subcategories/:id
//@access   Public
const getSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 400));
  }
  const subcategory = await subCategory.findById(id);
  if (!subcategory) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: subcategory });
});

//@desc     Update subcategory by id
//@route    PUT /api/v1/subcategories/:id
//@access   Private
const updateSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, category } = req.body;

  if (!id || !name) {
    return next(new AppError(`id or name is missing`, 400));
  }

  const subcategory = await subCategory.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name), category },
    { new: true }
  );
  if (!subcategory) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: subcategory });
});

//@desc     Delete subcategory by id
//@route    DELETE /api/v1/subcategories/:id
//@access   Private
const deleteSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 404));
  }
  const subcategory = await subCategory.findByIdAndDelete(id);
  if (!subcategory) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(202).json({ status: httpStatusText.SUCCESS, data: subcategory });
});

module.exports = {
  addSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
