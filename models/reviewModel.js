const mongoose = require('mongoose');

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

module.exports = mongoose.model('Review', reviewSchema);
