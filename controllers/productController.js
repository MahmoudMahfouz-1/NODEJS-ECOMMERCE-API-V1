const asyncHandler = require('express-async-handler');
const sharp = require('sharp');
const Product = require('../models/productModel');
const factory = require('./handlersFactory');
const { uploadMultibleImages } = require('../Middlewares/uploadImage');

const uploadImages = uploadMultibleImages([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 5 },
]);
const resizeImages = asyncHandler(async (req, res, next) => {
  // 1- Image Proccessing for imageCover
  if (req.files) {
    if (req.files.imageCover) {
      const imageCoverName = `product-${Date.now()}-cover.jpeg`;
      await sharp(req.files.imageCover[0].buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`uploads/products/${imageCoverName}`);

      req.body.imageCover = imageCoverName;
    }
    // 2- Image Proccessing for images
    if (req.files.images) {
      req.body.images = [];
      await Promise.all(
        req.files.images.map(async (img, index) => {
          const imageName = `product-${Date.now()}-${index + 1}.jpeg`;
          await sharp(img.buffer)
            .resize(600, 600)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`uploads/products/${imageName}`);
          req.body.images.push(imageName);
        })
      );
    }
  }

  next();
});

//@desc     create new Product
//@route    POST /api/v1/products
//@access   Private
const addProduct = factory.createOne(Product);

//@desc     get list of products
//@route    GET /api/v1/products
//@access   Public
const getProducts = factory.getAll(Product);

//@desc     Get Product by id
//@route    GET /api/v1/products/:id
//@access   Public
const getProduct = factory.getOne(Product, 'reviews');

//@desc     Update product by id
//@route    PUT /api/v1/products/:id
//@access   Private
const updateProduct = factory.updateOne(Product);

//@desc     Delete product by id
//@route    DELETE /api/v1/products/:id
//@access   Private
const deleteProduct = factory.deleteOne(Product);

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImages,
  resizeImages,
};
