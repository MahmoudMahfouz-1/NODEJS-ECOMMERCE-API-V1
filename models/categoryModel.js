const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category Name is required'],
      unique: [true, 'Category must be unique'],
      minlength: [3, 'Category name is too short'],
      maxlength: [32, 'Category name is too long'],
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
    const imageURL = `${process.env.BASE_URL}/uploads/category/${doc.image}`;
    doc.image = imageURL;
  }
};
// getAll, getOne, update
CategorySchema.post('init', (doc) => {
  imgURL(doc);
});
// create
CategorySchema.post('save', (doc) => {
  imgURL(doc);
});

const CategoryModel = mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;
