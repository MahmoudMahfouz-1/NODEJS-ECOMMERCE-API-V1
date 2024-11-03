const express = require('express');
const userControllers = require('../controllers/userController');
const userValidator = require('../utils/Validators/userValidator');

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
    userControllers.uploadImage,
    userControllers.resizeImage,
    userValidator.addUserValidator,
    userControllers.addUser
  )
  .get(userControllers.getUsers);

router
  .route('/:id')
  .get(userValidator.getUserValidator, userControllers.getUser)
  .put(
    userControllers.uploadImage,
    userControllers.resizeImage,
    userValidator.updateUserValidator,
    userControllers.UpdateUser
  )
  .delete(userValidator.deleteUserValidator, userControllers.deleteUser);

module.exports = router;
