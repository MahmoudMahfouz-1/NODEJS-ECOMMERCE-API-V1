const express = require('express');
const authControllers = require('../controllers/authController');
const authValidator = require('../utils/Validators/authValidator');

const router = express.Router();
router.post('/signup', authValidator.signupValidator, authControllers.signup);
router.post('/login', authValidator.loginValidator, authControllers.login);
router.post('/forgotPassword', authControllers.forgotPassword);
router.post('/verifyPasswordResetCode', authControllers.verifyPassResetCode);
router.put('/resetPassword', authControllers.resetPassword);
module.exports = router;
