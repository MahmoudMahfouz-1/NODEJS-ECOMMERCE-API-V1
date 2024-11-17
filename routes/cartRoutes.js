const express = require('express');
const cartControllers = require('../controllers/cartController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(
  authController.verifyToken,
  authController.allowedTo('admin', 'user')
);

router.put('/applyCoupon', cartControllers.applyCoupon);

router
  .route('/')
  .post(cartControllers.addProductToCart)
  .get(cartControllers.getCartItems)
  .delete(cartControllers.clearCart);

router
  .route('/:itemId')
  .delete(cartControllers.removeCartItem)
  .put(cartControllers.updateCartItemQuantity);

module.exports = router;
