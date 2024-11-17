const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Coupon name is required'],
    },
    expire: {
      type: Date,
      required: [true, 'Coupon expire time is required'],
    },
    discount: {
      type: Number,
      required: [true, 'Coupon discount value is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', couponSchema);
