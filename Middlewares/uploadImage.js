const multer = require('multer');

const AppError = require('../utils/appError');

const multerOptions = () => {
  // 1- Multer Using DiskStorage
  // const multerStorage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, 'uploads/category/');
  //   },
  //   filename: function (req, file, cb) {
  //     console.log(`File`, file);
  //     const ext = file.mimetype.split('/')[1];
  //     const fileName = `category-${Date.now()}-${ext}`;
  //     cb(null, fileName);
  //   },
  // });

  const multerStorage = multer.memoryStorage();

  const multerFilter = function (req, file, cb) {
    const fileType = file.mimetype.split('/')[0];
    if (fileType !== 'image') {
      cb(new AppError('Only Images are allowed to upload', 400), false);
    } else {
      cb(null, true);
    }
  };

  return multer({ storage: multerStorage, fileFilter: multerFilter });
};

const uploadSingleImage = (fieldName) => multerOptions().single(fieldName);

const uploadMultibleImages = (arrayOfFields) =>
  multerOptions().fields(arrayOfFields);

module.exports = { uploadSingleImage, uploadMultibleImages };
