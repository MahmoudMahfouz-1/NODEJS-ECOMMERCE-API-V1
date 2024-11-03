const express = require('express');
const authControllers = require('../controllers/authController');
const authValidator = require('../utils/Validators/authValidator');

const router = express.Router();

router
  .route('/signup')
  .post(authValidator.signupValidator, authControllers.signup);

router
  .route('/login')
  .post(authValidator.loginValidator, authControllers.login);

// router
//   .route('/:id')
//   .get(userValidator.getUserValidator, userControllers.getUser)
//   .put(
//     userControllers.uploadImage,
//     userControllers.resizeImage,
//     userValidator.updateUserValidator,
//     userControllers.UpdateUser
//   )
//   .delete(userValidator.deleteUserValidator, userControllers.deleteUser);

module.exports = router;
