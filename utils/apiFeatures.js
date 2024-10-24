class ApiFeatures {
  constructor(queryString, mongooseQuery) {
    this.queryString = queryString;
    this.mongooseQuery = mongooseQuery;
  }

  filter() {
    const queryStringObj = { ...this.queryString };
    const keyWords = ['page', 'limit', 'sort', 'fields', 'searchKeyWord'];
    keyWords.forEach((key) => delete queryStringObj[key]);

    // Apply using [gte, gt, lte, lt] in Filtering
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      let sortStr = this.queryString.sort;
      sortStr = sortStr.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.sort(sortStr);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const { fields } = this.queryString;
      const selectFields = fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(selectFields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select('-__v');
    }
    return this;
  }

  search(modelName) {
    if (this.queryString.searchKeyWord) {
      const query = {};
      if (modelName === 'products') {
        query.$or = [
          { title: { $regex: this.queryString.searchKeyWord, $options: 'i' } },
          {
            description: {
              $regex: this.queryString.searchKeyWord,
              $options: 'i',
            },
          },
        ];
      } else {
        query.$or = [
          { name: { $regex: this.queryString.searchKeyWord, $options: 'i' } },
        ];
      }

      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  /*
   * This function is responsible for handling pagination of documents.
   * It calculates the pagination details based on the current page, limit, and total documents count.
   * It also modifies the mongoose query to skip and limit the documents based on the pagination details.
   *
   * @param {number} documentsCount - The total number of documents to be paginated.
   * @returns {ApiFeatures} - The instance of ApiFeatures with updated pagination details and modified mongoose query.
   */
  paginate(documentsCount) {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 20;
    const skip = (page - 1) * limit;
    const endIndex = limit * page;

    const pagination = {};
    pagination.currentPage = page;
    pagination.totalPages = Math.ceil(documentsCount / limit);
    pagination.totalDocs = documentsCount;
    pagination.limit = limit;

    //next page
    if (endIndex < documentsCount) {
      pagination.nextPage = page + 1;
    }

    //previous page
    if (page > 1) {
      pagination.prevPage = page - 1;
    }

    this.pagination = pagination;
    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = ApiFeatures;
