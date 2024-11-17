const asyncHandler = require('express-async-handler');

const httpStatusText = require('../utils/httpStatusText');
const AppError = require('../utils/appError');
const Product = require('../models/productModel');
const Coupon = require('../models/couponModel');
const Cart = require('../models/cartModel');

const calcTotalCartPrice = (cart) => {
  let totalPrice = 0;
  cart.cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });
  cart.totalPriceAfterDiscount = undefined;
  return totalPrice;
};

//@desc     Add Product to a logged user Cart
//@route    POST /api/v1/cart
//@access   Private/user-admin
const addProductToCart = asyncHandler(async (req, res, next) => {
  const { productId, color } = req.body;
  const product = await Product.findById(productId);
  // 1) find the cart for the logged user if not found create a cart and add the product in it
  let cart = await Cart.findOne({ user: req.user._id });
  // there is no cart => Create one and add the product in it
  if (!cart) {
    cart = await Cart.create({
      cartItems: [{ product: productId, color, price: product.price }],
      user: req.user._id,
    });
  } else {
    // there is a cart
    // check if the product exists in the cartItems array update the quantity of the product with one
    const productInCartIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId && item.color === color
    );
    if (productInCartIndex > -1) {
      // the product exists count++
      cart.cartItems[productInCartIndex].quantity += 1;
    } else {
      // if the product isn't in the cart then push it to the cartItems Array
      cart.cartItems.push({ product: productId, color, price: product.price });
    }

    // calculate totalCartPrice
    const totalPrice = calcTotalCartPrice(cart);
    cart.totalCartPrice = totalPrice;

    await cart.save();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: cart });
  }
});

//@desc     Get Logged user cart data
//@route    GET /api/v1/cart
//@access   Private/user-admin
const getCartItems = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: 'title',
  });
  if (!cart) {
    return next(new AppError('there is no cart for this user id.', 404));
  }
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    numberOfItems: cart.cartItems.length,
    data: cart,
  });
});

//@desc     Remove Cart Item
//@route    DELETE /api/v1/cart
//@access   Private/user-admin
const removeCartItem = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOneAndUpdate(
    { user: req.user.id },
    {
      $pull: { cartItems: { _id: req.params.itemId } },
    },
    { new: true }
  );
  const totalPrice = calcTotalCartPrice(cart);
  cart.totalCartPrice = totalPrice;
  await cart.save();

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    numberOfItems: cart.cartItems.length,
    data: cart,
  });
});

//@desc     clear logged User Cart
//@route    DELETE /api/v1/cart
//@access   Private/user-admin
const clearCart = asyncHandler(async (req, res, next) => {
  await Cart.findOneAndDelete({ user: req.user._id }, { new: true });
  res.status(204).json({
    status: httpStatusText.SUCCESS,
    msg: `Your cart has been successfully cleared`,
  });
});

//@desc     update logged User Cart item quantity
//@route    PUT /api/v1/cart/:itemId
//@access   Private/user-admin
const updateCartItemQuantity = asyncHandler(async (req, res, next) => {
  const { quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    return next(new AppError('there is no cart for this user id.', 404));
  }
  const itemIndex = cart.cartItems.findIndex(
    (item) => item._id.toString() === req.params.itemId
  );
  if (itemIndex > -1) {
    cart.cartItems[itemIndex].quantity = quantity;
    const totalPrice = calcTotalCartPrice(cart);
    cart.totalCartPrice = totalPrice;
    await cart.save();
  } else {
    return next(new AppError('there is no item for this user id.', 404));
  }

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    numberOfItems: cart.cartItems.length,
    data: cart,
  });
});

//@desc     apply coupon on logged user cart
//@route    PUT /api/v1/cart/applyCoupon
//@access   Private/user-admin
const applyCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findOne({
    name: req.body.coupon,
    expire: { $gt: Date.now() },
  });
  if (!coupon) {
    return next(new AppError(`Coupon is either invalid or expired`, 404));
  }
  const cart = await Cart.findOne({ user: req.user._id });
  const cartPrice = cart.totalCartPrice;

  const totalPriceAfterDiscount = ((cartPrice * coupon.discount) / 100).toFixed(
    2
  );
  cart.totalPriceAfterDiscount = totalPriceAfterDiscount;
  await cart.save();

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    numberOfItems: cart.cartItems.length,
    data: cart,
  });
});

module.exports = {
  addProductToCart,
  getCartItems,
  removeCartItem,
  clearCart,
  updateCartItemQuantity,
  applyCoupon,
};
