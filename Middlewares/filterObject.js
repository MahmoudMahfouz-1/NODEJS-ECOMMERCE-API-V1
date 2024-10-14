exports.filterObject = (req, res, next) => {
  if (req.params.categoryId) {
    req.filterObj = { category: req.params.categoryId };
  } else {
    req.filterObj = {};
  }
  next();
};
