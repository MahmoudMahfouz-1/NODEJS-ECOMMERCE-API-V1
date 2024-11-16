const express = require('express');
const wishlistControllers = require('../controllers/wishlistController');
const {
  addProductToWishListValidator,
  removeProductfromWishListValidator,
} = require('../utils/Validators/wishlistValidator');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'user'),
    addProductToWishListValidator,
    wishlistControllers.addProductToWishlist
  )
  .get(
    authController.verifyToken,
    authController.allowedTo('admin', 'user'),
    wishlistControllers.getLoggedUserWishlist
  );

router.delete(
  '/:productId',
  authController.verifyToken,
  authController.allowedTo('admin', 'user'),
  removeProductfromWishListValidator,
  wishlistControllers.removeProductFromWishlist
);

module.exports = router;
