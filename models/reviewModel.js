const mongoose = require('mongoose');
const Product = require('./productModel');

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  ratings: {
    type: Number,
    min: [0.0, 'Min ratings value is 0.0'],
    max: [5.0, 'Max ratings value is 5.0'],
    required: [true, 'Ratings are required'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user'],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Procuct',
    required: [true, 'Review must belong to a product'],
  },
});

// populate ant query with find in it
reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: 'user', select: 'name' });
  next();
});

reviewSchema.statics.calcAvgRatingsAndRatingsQuantity = async function (
  productId
) {
  const result = await this.aggregate([
    // Stage 1: get all reviews in specific product using product id
    { $match: { product: productId } },
    // Stage 2: Groub reviews by product id and Claculate Avg and Quantity of ratings
    {
      $group: {
        _id: 'product',
        avgRatings: { $avg: '$ratings' },
        ratingsQuantity: { $sum: 1 },
      },
    },
  ]);
  // Update ratingsAverage and ratingsQuantity value in product
  if (result.length > 0) {
    await Product.findByIdAndUpdate(productId, {
      ratingsAverage: result[0].avgRatings,
      ratingsQuantity: result[0].ratingsQuantity,
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      ratingsAverage: 0,
      ratingsQuantity: 0,
    });
  }
};

reviewSchema.post('save', async function () {
  await this.constructor.calcAvgRatingsAndRatingsQuantity(this.product);
});

// reviewSchema.post('deleteOne', async function () {
//   await this.constructor.calcAvgRatingsAndRatingsQuantity(this.product);
// });

reviewSchema.post(
  'deleteOne',
  { document: true, query: false },
  async function () {
    const Review = this.constructor; // Reference to the model
    if (Review.calcAvgRatingsAndRatingsQuantity) {
      await Review.calcAvgRatingsAndRatingsQuantity(this.product);
    }
  }
);
module.exports = mongoose.model('Review', reviewSchema);
