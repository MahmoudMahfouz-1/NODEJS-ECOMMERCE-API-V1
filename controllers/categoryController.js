const multer = require('multer');
const asyncHandler = require('express-async-handler');
const sharp = require('sharp');
const Category = require('../models/categoryModel');
const factory = require('./handlersFactory');
const AppError = require('../utils/appError');

// 1- Multer Using DiskStorage
// const multerStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/category/');
//   },
//   filename: function (req, file, cb) {
//     console.log(`File`, file);
//     const ext = file.mimetype.split('/')[1];
//     const fileName = `category-${Date.now()}-${ext}`;
//     cb(null, fileName);
//   },
// });

// 2- Multer using MemoryStorage
const multerStorage = multer.memoryStorage();

const multerFilter = function (req, file, cb) {
  const fileType = file.mimetype.split('/')[0];
  if (fileType !== 'image') {
    cb(new AppError('Only Images are allowed to upload', 400), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
const uploadImage = upload.single('image');

const resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `category-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(600, 600)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`uploads/category/${fileName}`);

  req.body.image = fileName;
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
