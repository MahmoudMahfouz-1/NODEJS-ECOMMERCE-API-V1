const express = require('express');
const userControllers = require('../controllers/userController');
const userValidator = require('../utils/Validators/userValidator');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/changePassword/:id')
  .put(
    userValidator.changeUserPasswordValidator,
    userControllers.changeUserPassword
  );

router
  .route('/')
  .post(
    authController.verifyToken,
    authController.allowedTo('admin'),
    userControllers.uploadImage,
    userControllers.resizeImage,
    userValidator.addUserValidator,
    userControllers.addUser
  )
  .get(
    authController.verifyToken,
    authController.allowedTo('admin', 'manager'),
    userControllers.getUsers
  );

router
  .route('/:id')
  .get(
    authController.verifyToken,
    authController.allowedTo('admin'),
    userValidator.getUserValidator,
    userControllers.getUser
  )
  .put(
    authController.verifyToken,
    authController.allowedTo('admin'),
    userControllers.uploadImage,
    userControllers.resizeImage,
    userValidator.updateUserValidator,
    userControllers.UpdateUser
  )
  .delete(
    authController.verifyToken,
    authController.allowedTo('admin'),
    userValidator.deleteUserValidator,
    userControllers.deleteUser
  );

module.exports = router;
