const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

const httpStatusText = require('../utils/httpStatusText');
const Product = require('../models/productModel');
const AppError = require('../utils/appError');

//@desc     create new Product
//@route    POST /api/v1/products
//@access   Private
const addProduct = asyncHandler(async (req, res) => {
  req.body.slug = slugify(req.body.title);
  const products = await Product.create(req.body);
  res.status(201).json({ status: httpStatusText.SUCCESS, data: products });
});

//@desc     get list of products
//@route    GET /api/v1/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
  // 1- Filtering
  const queryStringObj = { ...req.query };
  const keyWords = ['page', 'limit', 'sort', 'field'];
  keyWords.forEach((key) => delete queryStringObj[key]);

  // Apply using [gte, gt, lte, lt] in Filtering
  let queryStr = JSON.stringify(queryStringObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  // 2- Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;

  // Query Building
  let mongooseQuery = Product.find(JSON.parse(queryStr))
    .skip(skip)
    .limit(limit)
    .populate({ path: 'category', select: 'name-_id' })
    .populate({ path: 'subcategory', select: 'name -_id' });

  // 3- Sorting
  if (req.query.sort) {
    let sortStr = req.query.sort;
    sortStr = sortStr.split(',').join(' ');
    mongooseQuery = mongooseQuery.sort(sortStr);
  } else {
    mongooseQuery = mongooseQuery.sort('-createdAt');
  }

  // Excuting Query
  const products = await mongooseQuery;

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    results: products.length,
    page,
    data: products,
  });
});

//@desc     Get Product by id
//@route    GET /api/v1/products/:id
//@access   Public
const getProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 400));
  }
  const product = await Product.findById(id).populate({
    path: 'category',
    select: 'name-_id',
  });
  if (!product) {
    return next(new AppError(`No product found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: product });
});

//@desc     Update product by id
//@route    PUT /api/v1/products/:id
//@access   Private
const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new AppError(`id is missing`, 400));
  }
  req.body.slug = slugify(req.body.title);

  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    returnDocument: 'after',
  });
  if (!product) {
    return next(new AppError(`No product found with this id ${id}`, 404));
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: product });
});

//@desc     Delete product by id
//@route    DELETE /api/v1/products/:id
//@access   Private
const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(`You must enter an ID`, 404));
  }
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return next(new AppError(`No product found with this id ${id}`, 404));
  }
  res.status(202).json({ status: httpStatusText.SUCCESS, data: product });
});

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
