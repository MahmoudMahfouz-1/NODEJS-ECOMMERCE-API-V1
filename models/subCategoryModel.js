const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, 'subCategory must be unique'],
      minlength: [2, 'subCategory name is too short'],
      maxlength: [32, 'subCategory name is too long'],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'subCategory must belong to parent category'],
    },
  },
  { timestamps: true }
);
//
module.exports = mongoose.model('subCategory', subCategorySchema);
