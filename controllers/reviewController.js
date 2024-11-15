const Review = require('../models/reviewModel');
const factory = require('./handlersFactory');

// for Nested Route to create review on a product
const setProductIdandUserIdToBody = (req, res, next) => {
  if (!req.body.product) {
    req.body.product = req.params.productId;
  }
  if (!req.body.user) {
    req.body.user = req.user._id;
  }
  next();
};
//@desc     create new Review
//@route    POST /api/v1/reviews
//@access   Public/protect/user
const addReview = factory.createOne(Review);

// for Nested Route to create review on a product
const filterObject = (req, res, next) => {
  if (req.params.productId) {
    req.filterObj = { product: req.params.productId };
  } else {
    req.filterObj = {};
  }
  next();
};
//@desc     get list of Reviews
//@route    GET /api/v1/reviews
//@access   Public
const getReviews = factory.getAll(Review);

//@desc     Get Review by id
//@route    GET /api/v1/reviews/:id
//@access   Public
const getReview = factory.getOne(Review);

//@desc     Update Review by id
//@route    PUT /api/v1/reviews/:id
//@access   Private/protect/user
const UpdateReview = factory.updateOne(Review);

//@desc     Delete Review by id
//@route    DELETE /api/v1/reviews/:id
//@access   Private/protect/user-admin-manager
const deleteReview = factory.deleteOne(Review);

module.exports = {
  addReview,
  getReview,
  getReviews,
  UpdateReview,
  deleteReview,
  filterObject,
  setProductIdandUserIdToBody,
};
