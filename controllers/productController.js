const Product = require('../models/productModel');
const factory = require('./handlersFactory');

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
const getProduct = factory.getOne(Product);

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
};
