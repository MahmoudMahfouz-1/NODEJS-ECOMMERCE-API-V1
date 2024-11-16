const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const httpStatusText = require('../utils/httpStatusText');

//@desc     add New address to the user
//@route    POST /api/v1/addresses
//@access   protected/user-admin
exports.addAddress = asyncHandler(async (req, res, next) => {
  // $addToSet => add productId to wishlist array
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: { addresses: req.body },
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    msg: `Address added successfully `,
    data: user.addresses,
  });
});

//@desc     remove address from user
//@route    DELETE /api/v1/addresses/:addressId
//@access   protected/user-admin
exports.removeAddress = asyncHandler(async (req, res, next) => {
  console.log(req.params.addressId);
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { addresses: { _id: req.params.addressId } },
    },
    {
      new: true,
    }
  );
  console.log(user);
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    msg: `Address removed successfully`,
    data: user.addresses,
  });
});

//@desc     Get Logged User list of addresses
//@route    GET /api/v1/addresses/
//@access   protected/user-admin
exports.getLoggedUseraddressesList = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: user.addresses,
  });
});
