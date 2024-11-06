const express = require('express');
const reviewControllers = require('../controllers/reviewController');
const authController = require('../controllers/authController');
const reviewValidator = require('../utils/Validators/reviewValidator');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('user', 'admin'),
    reviewValidator.addReviewValidator,
    reviewControllers.addReview
  )
  .get(reviewControllers.getReviews);

router
  .route('/:id')
  .get(reviewValidator.getReviewValidator, reviewControllers.getReview)
  .put(
    authController.verifyToken,
    authController.allowedTo('user', 'admin'),
    reviewValidator.updateReviewValidator,
    reviewControllers.UpdateReview
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager', 'user'),
    reviewValidator.deleteReviewValidator,
    reviewControllers.deleteReview
  );

module.exports = router;
