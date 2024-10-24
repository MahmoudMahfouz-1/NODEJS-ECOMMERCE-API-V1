const asyncHandler = require('express-async-handler');

const AppError = require('../utils/appError');
const ApiFeatures = require('../utils/apiFeatures');
const httpStatusText = require('../utils/httpStatusText');

const deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      return next(new AppError(`You must enter an ID`, 404));
    }
    const document = await Model.findByIdAndDelete(id);
    if (!document) {
      return next(new AppError(`No document found with this id ${id}`, 404));
    }
    res.status(202).json({ status: httpStatusText.SUCCESS, data: document });
  });

const updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError(`id is missing`, 400));
    }

    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document) {
      return next(
        new AppError(`No document found with this id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ status: httpStatusText.SUCCESS, data: document });
  });

const createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const document = await Model.create(req.body);
    res.status(201).json({ status: httpStatusText.SUCCESS, data: document });
  });

const getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError(`You must enter an ID`, 400));
    }
    const document = await Model.findById(req.params.id);
    if (!document) {
      return next(
        new AppError(`No category found with this id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ status: httpStatusText.SUCCESS, data: document });
  });

const getAll = (Model) =>
  asyncHandler(async (req, res) => {
    const documentsCount = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(req.query, Model.find())
      .filter()
      .sort()
      .paginate(documentsCount)
      .limitFields()
      .search();

    // Excuting Query
    const { mongooseQuery, pagination } = apiFeatures;
    const documents = await mongooseQuery;

    res.status(200).json({
      status: httpStatusText.SUCCESS,
      results: documents.length,
      pagination,
      data: documents,
    });
  });

module.exports = { deleteOne, updateOne, createOne, getOne, getAll };
