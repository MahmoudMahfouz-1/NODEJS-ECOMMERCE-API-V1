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

const imgURL = (doc) => {
  if (doc.image) {
    // return full image URL
    const imageURL = `${process.env.BASE_URL}/uploads/brands/${doc.image}`;
    doc.image = imageURL;
  }
};
// getAll, getOne, update
BrandSchema.post('init', (doc) => {
  imgURL(doc);
});
// create
BrandSchema.post('save', (doc) => {
  imgURL(doc);
});
const BrandModel = mongoose.model('Brand', BrandSchema);
module.exports = BrandModel;
