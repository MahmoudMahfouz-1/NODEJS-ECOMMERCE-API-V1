const Coupon = require('../models/couponModel');
const factory = require('./handlersFactory');

//@desc     create new coupon
//@route    POST /api/v1/coupons
//@access   Private/admin-manager
const addCoupon = factory.createOne(Coupon);

//@desc     get list of coupons
//@route    GET /api/v1/coupons
//@access   Private/admin-manager
const getCoupons = factory.getAll(Coupon);

//@desc     Get coupon by id
//@route    GET /api/v1/coupons/:id
//@access   Private/admin-manager
const getCoupon = factory.getOne(Coupon);

//@desc     Update Coupon by id
//@route    PUT /api/v1/coupons/:id
//@access   Private/admin-manager
const UpdateCoupon = factory.updateOne(Coupon);

//@desc     Delete Coupon by id
//@route    DELETE /api/v1/coupons/:id
//@access   Private/admin-manager
const deleteCoupon = factory.deleteOne(Coupon);

module.exports = {
  addCoupon,
  getCoupons,
  getCoupon,
  UpdateCoupon,
  deleteCoupon,
};
