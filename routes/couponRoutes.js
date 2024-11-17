const express = require('express');
const couponControllers = require('../controllers/couponController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(
  authController.verifyToken,
  authController.allowedTo('admin', 'manager')
);

router
  .route('/')
  .post(couponControllers.addCoupon)
  .get(couponControllers.getCoupons);

router
  .route('/:id')
  .get(couponControllers.getCoupon)
  .put(couponControllers.UpdateCoupon)
  .delete(couponControllers.deleteCoupon);

module.exports = router;
