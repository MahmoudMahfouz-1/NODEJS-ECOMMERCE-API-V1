const express = require('express');
const addressesControllers = require('../controllers/addressesController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin', 'user'),
    addressesControllers.addAddress
  )
  .get(
    authController.verifyToken,
    authController.allowedTo('admin', 'user'),
    addressesControllers.getLoggedUseraddressesList
  );

router.delete(
  '/:addressId',
  authController.verifyToken,
  authController.allowedTo('admin', 'user'),
  addressesControllers.removeAddress
);

module.exports = router;
