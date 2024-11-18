const asyncHandler = require('express-async-handler');
const factory = require('./handlersFactory');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const AppError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');

//@desc     create new order
//@route    POST /api/v1/orders/:cartId
//@access   Private/admin-user
const createCashOrder = asyncHandler(async (req, res, next) => {
  const taxPrice = 0;
  const shippingPrice = 0;
  // 1- Get cart Depending on cartId
  const cart = await Cart.findById(req.params.cartId);
  if (!cart) {
    return next(
      new AppError(`There is No Cart with this ID ${req.params.cartId}`, 404)
    );
  }
  // 2- get Total Order price from the cart - check if there is a coupon or not
  const totalCartPrice = cart.totalPriceAfterDiscount
    ? cart.totalPriceAfterDiscount
    : cart.totalCartPrice;
  const totalOrderPrice = totalCartPrice + taxPrice + shippingPrice;
  // 3- create order
  const order = await Order.create({
    user: req.user._id,
    cartItems: cart.cartItems,
    shippingAddress: req.body.shippingAddress,
    totalOrderPrice: totalOrderPrice,
  });
  // 4- decrement product quantity and increment product sold field
  if (order) {
    const bulkOptions = cart.cartItems.map((item) => ({
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: -item.quantity, sold: +item.quantity } },
      },
    }));
    await Product.bulkWrite(bulkOptions, {});
    // 5- clear cart depending on cartId
    await Cart.findByIdAndDelete(req.params.cartId);
  } else {
    return next(new AppError(`No Order was created`, 400));
  }

  // 6- Sending Response
  res.status(201).json({ status: httpStatusText.SUCCESS, data: order });
});

const filterObjForLoggedUser = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'user') {
    req.filterObj = { user: req.user._id };
  } else {
    req.filterObj = {};
  }
  next();
});
//@desc     Get all orders based on role
//@route    GET /api/v1/orders/
//@access   Private/admin-user
const getAllOrders = factory.getAll(Order);

//@desc     Get an order for logged user
//@route    GET /api/v1/orders/
//@access   Private/admin-user
const getOrder = factory.getOne(Order);

//@desc     Update order to paid
//@route    POST /api/v1/orders/:id/pay
//@access   Private/admin-manager
const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(
      new AppError(`There is No order with this id ${req.params.id}`, 404)
    );
  }
  order.isPaid = true;
  order.paidAt = Date.now();

  const updatedOrder = await order.save();
  res.status(200).json({ status: httpStatusText.SUCCESS, data: updatedOrder });
});

//@desc     Update order to Delivered
//@route    POST /api/v1/orders/:id/deliver
//@access   Private/admin-manager
const updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(
      new AppError(`There is No order with this id ${req.params.id}`, 404)
    );
  }
  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();
  res.status(200).json({ status: httpStatusText.SUCCESS, data: updatedOrder });
});

module.exports = {
  createCashOrder,
  filterObjForLoggedUser,
  getAllOrders,
  getOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
};
