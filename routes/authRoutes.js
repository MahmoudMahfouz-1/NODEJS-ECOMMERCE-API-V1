const express = require('express');
const authControllers = require('../controllers/authController');
const authValidator = require('../utils/Validators/authValidator');

const router = express.Router();
router.route('/forgotPassword').get(authControllers.forgotPassword);

router
  .route('/signup')
  .post(authValidator.signupValidator, authControllers.signup);

router
  .route('/login')
  .post(authValidator.loginValidator, authControllers.login);

module.exports = router;
