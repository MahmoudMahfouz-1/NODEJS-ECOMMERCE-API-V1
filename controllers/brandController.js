const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

const httpStatusText = require('../utils/httpStatusText');
const Brand = require('../models/brandModel');
const AppError = require('../utils/appError');

//@desc     create new brand
//@route    POST /api/v1/brands
//@access   Private
const addBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const brand = await Brand.create({ name, slug: slugify(name) });
  res.status(201).json({ status: httpStatusText.SUCCESS, data: brand });
});

//@desc     get list of brands
//@route    GET /api/v1/brands
//@access   Public
const getBrands = asyncHandler(async (req, res) => {
  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;
  const brands = await Brand.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: brands.length, page, data: brands });
});

//@desc     Get brand by id
//@route    GET /api/v1/brands/:id
//@access   Public
const getBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 400));
  }
  const brand = await Brand.findById(id);
  if (!brand) {
    return next(new AppError(`No category found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: brand });
});

//@desc     Update brand by id
//@route    PUT /api/v1/brands/:id
//@access   Private
const UpdateBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name) {
    return next(new AppError(`id or name is missing`, 400));
  }

  const brand = await Brand.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!brand) {
    return next(new AppError(`No brand found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: brand });
});

//@desc     Delete brand by id
//@route    DELETE /api/v1/brands/:id
//@access   Private
const deleteBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 404));
  }
  const brand = await Brand.findByIdAndDelete(id);
  if (!brand) {
    return next(new AppError(`No brand found with this id ${id}`, 404));
  }
  res.status(202).json({ status: httpStatusText.SUCCESS, data: brand });
});

module.exports = {
  addBrand,
  getBrands,
  getBrand,
  UpdateBrand,
  deleteBrand,
};
