const express = require('express');
const reviewControllers = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('user', 'admin'),
    reviewControllers.addReview
  )
  .get(reviewControllers.getReviews);

router
  .route('/:id')
  .get(reviewControllers.getReview)
  .put(
    authController.verifyToken,
    authController.allowedTo('user', 'admin'),
    reviewControllers.UpdateReview
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager', 'user'),
    reviewControllers.deleteReview
  );

module.exports = router;
