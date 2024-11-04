const asyncHandler = require('express-async-handler');
const sharp = require('sharp');
const { uploadSingleImage } = require('../Middlewares/uploadImage');
const factory = require('./handlersFactory');
const Category = require('../models/categoryModel');

// Upload Single Image Using Multer
const uploadImage = uploadSingleImage('image');

const resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `category-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`uploads/category/${fileName}`);

    req.body.image = fileName;
  }
  next();
});

//@desc     create new category
//@route    POST /api/v1/categories
//@access   Private
const addCategory = factory.createOne(Category);

//@desc     get list of categories
//@route    GET /api/v1/categories
//@access   Public
const getCategories = factory.getAll(Category);

//@desc     Get category by id
//@route    GET /api/v1/categories/:id
//@access   Public
const getCategory = factory.getOne(Category);

//@desc     Update category by id
//@route    PUT /api/v1/categories/:id
//@access   Private
const UpdateCategory = factory.updateOne(Category);

//@desc     Delete category by id
//@route    DELETE /api/v1/categories/:id
//@access   Private
const deleteCategory = factory.deleteOne(Category);

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  UpdateCategory,
  deleteCategory,
  uploadImage,
  resizeImage,
};
