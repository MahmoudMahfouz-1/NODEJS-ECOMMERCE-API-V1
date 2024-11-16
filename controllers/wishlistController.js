const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const httpStatusText = require('../utils/httpStatusText');

//@desc     add product to user's wishlist
//@route    POST /api/v1/wishlist
//@access   protected/user-admin
exports.addProductToWishlist = asyncHandler(async (req, res, next) => {
  // $addToSet => add productId to wishlist array
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: { wishlist: req.body.productId },
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    msg: `product added successfully to your wishlist`,
    data: user.wishlist,
  });
});

//@desc     remove product from user's wishlist
//@route    DELETE /api/v1/wishlist/:productId
//@access   protected/user-admin
exports.removeProductFromWishlist = asyncHandler(async (req, res, next) => {
  // $addToSet => add productId to wishlist array
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { wishlist: req.params.productId },
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    msg: `product removed successfully from your wishlist`,
    data: user.wishlist,
  });
});

//@desc     Get Logged User wishlist
//@route    GET /api/v1/wishlist/
//@access   protected/user-admin
exports.getLoggedUserWishlist = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate('wishlist');
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: user.wishlist,
  });
});
