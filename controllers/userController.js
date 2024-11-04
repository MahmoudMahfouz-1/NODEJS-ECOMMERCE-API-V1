const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const sharp = require('sharp');
const User = require('../models/userModel');
const factory = require('./handlersFactory');
const AppError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');
const { uploadSingleImage } = require('../Middlewares/uploadImage');

const uploadImage = uploadSingleImage('image');

const resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `user-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`uploads/users/${fileName}`);

    req.body.image = fileName;
  }

  next();
});

//@desc     create new user
//@route    POST /api/v1/users
//@access   Private
const addUser = factory.createOne(User);

//@desc     get list of users
//@route    GET /api/v1/users
//@access   Private
const getUsers = factory.getAll(User);

//@desc     Get user by id
//@route    GET /api/v1/users/:id
//@access   Private
const getUser = factory.getOne(User);

//@desc     Update user by id
//@route    PUT /api/v1/users/:id
//@access   Private
const UpdateUser = asyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError(`id is missing`, 400));
  }

  const document = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      phone: req.body.phone,
      slug: req.body.slug,
      email: req.body.email,
      profileImg: req.body.profileImg,
      role: req.body.role,
    },
    {
      new: true,
    }
  );
  if (!document) {
    return next(
      new AppError(`No document found with this id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: document });
});

//@desc     change user passowrd by id
//@route    PUT /api/v1/users/changePassword/:id
//@access   Private
const changeUserPassword = asyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError(`id is missing`, 400));
  }

  const document = await User.findByIdAndUpdate(
    req.params.id,
    {
      password: await bcrypt.hash(req.body.password, 12),
      passChangedAt: Date.now(),
    },
    {
      new: true,
    }
  );
  if (!document) {
    return next(
      new AppError(`No document found with this id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ status: httpStatusText.SUCCESS, data: document });
});

//@desc     Delete user by id
//@route    DELETE /api/v1/users/:id
//@access   Private
const deleteUser = factory.deleteOne(User);

module.exports = {
  addUser,
  getUsers,
  getUser,
  UpdateUser,
  deleteUser,
  uploadImage,
  resizeImage,
  changeUserPassword,
};
