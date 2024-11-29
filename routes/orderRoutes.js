const express = require('express');
const orderControllers = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.verifyToken);

router.get('/checkout-session/:cartId', orderControllers.checkOutSession);

router
  .route('/:cartId')
  .post(
    authController.allowedTo('admin', 'user'),
    orderControllers.createCashOrder
  );

router.get(
  '/',
  authController.allowedTo('admin', 'user'),
  orderControllers.filterObjForLoggedUser,
  orderControllers.getAllOrders
);
router.post(
  '/:id/pay',
  authController.allowedTo('admin', 'manager'),
  orderControllers.updateOrderToPaid
);
router.post(
  '/:id/deliver',
  authController.allowedTo('admin', 'manager'),
  orderControllers.updateOrderToDelivered
);

router.get('/:id', orderControllers.getOrder);
module.exports = router;
