const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
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

//@desc     Create checkout session
//@route    GET /api/v1/orders/checkout-session/:cartId
//@access   Private/admin-user
const checkOutSession = asyncHandler(async (req, res, next) => {
  // app Setting
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

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'egp',
          unit_amount: totalOrderPrice * 100,
          product_data: {
            name: 'Total Cart Items',
            // description: 'Comfortable cotton t-shirt',
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${req.protocol}://${req.get('host')}/orders`,
    cancel_url: `${req.protocol}://${req.get('host')}/cart`,
    customer_email: req.user.email,
    // customer: {
    //   name: req.user.name,
    //   email: req.user.email,
    // },
    client_reference_id: req.params.cartId,
  });

  res.status(200).json({ status: httpStatusText.SUCCESS, session });
});

const webhookCheckout = asyncHandler(async (req, res, next) => {
  let event = req.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Get the signature sent by Stripe
    const signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }
  }
  if (event.type === 'checkout.session.completed') {
    console.log(`Create Order Here ...`);
    console.log(`EVENT: `, event);
  }
});
module.exports = {
  createCashOrder,
  filterObjForLoggedUser,
  getAllOrders,
  getOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
  checkOutSession,
  webhookCheckout,
};
