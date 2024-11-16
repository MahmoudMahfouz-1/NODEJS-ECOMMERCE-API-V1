const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'email is required'],
    },
    phone: String,
    profileImg: String,
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [6, 'password is too short less than 6 chars'],
    },
    passChangedAt: Date,
    passwordRestCode: String,
    passwordResetExpire: Date,
    passwordResetVerified: Boolean,
    role: {
      type: String,
      enum: ['user', 'admin', 'manager'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
    },
    wishlist: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
      },
    ],
    addresses: [
      {
        id: { type: mongoose.Schema.Types.ObjectId },
        alias: String,
        details: String,
        phone: String,
        city: String,
        postalCode: String,
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
