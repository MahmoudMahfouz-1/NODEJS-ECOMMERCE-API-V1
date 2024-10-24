const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      minlength: [3, 'Product title is too short'],
      maxlength: [128, 'Product title is too long'],
    },
    slug: {
      type: String,
      lowercase: true,
      minlength: [3, 'Product slug is too short'],
      maxlength: [128, 'Product slug is too long'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required NOW'],
      minlength: [10, 'Product description is too short'],
      maxlength: [512, 'Product description is too long'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
      min: [1, 'Product quantity must be greater than or equal to 1'],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Product price must be greater than or equal to 0'],
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
    },
    colors: [String],
    imageCover: {
      type: String,
      required: [true, 'Product cover image is required'],
    },
    images: [String],
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Product must belong to a category'],
    },
    subcategory: {
      type: mongoose.Schema.ObjectId,
      ref: 'subCategory',
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: 'Brand',
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be greater than or equal to 0'],
      max: [5, 'Rating must be less than or equal to 5'],
    },
    ratingsAverage: {
      type: Number,
      default: 0,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name -_id',
  });
  next();
});

module.exports = mongoose.model('Product', productSchema);
