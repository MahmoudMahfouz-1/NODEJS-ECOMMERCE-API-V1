const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Brand is required'],
      unique: [true, 'Brand must be unique'],
      minlength: [3, 'Brand name is too short'],
      maxlength: [32, 'Brand name is too long'],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true }
);

const BrandModel = mongoose.model('Brand', BrandSchema);
module.exports = BrandModel;
