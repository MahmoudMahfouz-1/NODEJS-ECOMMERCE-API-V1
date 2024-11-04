const asyncHandler = require('express-async-handler');
const sharp = require('sharp');
const Brand = require('../models/brandModel');
const factory = require('./handlersFactory');

const { uploadSingleImage } = require('../Middlewares/uploadImage');

const uploadImage = uploadSingleImage('image');

const resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `brand-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`uploads/brands/${fileName}`);

    req.body.image = fileName;
  }
  next();
});

//@desc     create new brand
//@route    POST /api/v1/brands
//@access   Private
const addBrand = factory.createOne(Brand);

//@desc     get list of brands
//@route    GET /api/v1/brands
//@access   Public
const getBrands = factory.getAll(Brand);

//@desc     Get brand by id
//@route    GET /api/v1/brands/:id
//@access   Public
const getBrand = factory.getOne(Brand);

//@desc     Update brand by id
//@route    PUT /api/v1/brands/:id
//@access   Private
const UpdateBrand = factory.updateOne(Brand);

//@desc     Delete brand by id
//@route    DELETE /api/v1/brands/:id
//@access   Private
const deleteBrand = factory.deleteOne(Brand);

module.exports = {
  addBrand,
  getBrands,
  getBrand,
  UpdateBrand,
  deleteBrand,
  uploadImage,
  resizeImage,
};
