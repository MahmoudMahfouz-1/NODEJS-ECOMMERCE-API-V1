const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

const httpStatusText = require('../utils/httpStatusText');
const Category = require('../models/categoryModel');
const AppError = require('../utils/appError');

//@desc     create new category
//@route    POST /api/v1/categories
//@access   Private
const addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name, slug: slugify(name) });
  res.status(201).json({ status: httpStatusText.SUCCESS, data: category });
});

//@desc     get list of categories
//@route    GET /api/v1/categories
//@access   Public
const getCategories = asyncHandler(async (req, res) => {
  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;
  const categories = await Category.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

//@desc     Get category by id
//@route    GET /api/v1/categories/:id
//@access   Public
const getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 400));
  }
  const category = await Category.findById(id);
  if (!category) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: category });
});

//@desc     Update category by id
//@route    PUT /api/v1/categories/:id
//@access   Private
const UpdateCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name) {
    return next(new AppError(`id or name is missing`, 400));
  }

  const category = await Category.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: category });
});

//@desc     Delete category by id
//@route    DELETE /api/v1/categories/:id
//@access   Private
const deleteCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 404));
  }
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(202).json({ status: httpStatusText.SUCCESS, data: category });
});

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  UpdateCategory,
  deleteCategory,
};
