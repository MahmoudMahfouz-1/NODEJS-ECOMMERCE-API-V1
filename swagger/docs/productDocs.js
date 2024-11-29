/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 *
 * paths:
 *   /api/v1/products:
 *     post:
 *       summary: Create a new product
 *       tags:
 *         - Products
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Product Example"
 *                 description:
 *                   type: string
 *                   example: "This is a detailed description of the product."
 *                 quantity:
 *                   type: integer
 *                   example: 50
 *                 sold:
 *                   type: integer
 *                   example: 0
 *                 price:
 *                   type: number
 *                   example: 200.0
 *                 priceAfterDiscount:
 *                   type: number
 *                   example: 150.0
 *                 colors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["Red", "Blue"]
 *                 imageCover:
 *                   type: string
 *                   example: "cover-image.jpg"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["image1.jpg", "image2.jpg"]
 *                 category:
 *                   type: string
 *                   description: The category ID of the product
 *                   example: "649d8b65e57e3b48f0c2c5f4"
 *                 subcategory:
 *                   type: string
 *                   description: The subcategory ID of the product
 *                   example: "649d8b65e57e3b48f0c2c5f5"
 *                 brand:
 *                   type: string
 *                   description: The brand ID of the product
 *                   example: "649d8b65e57e3b48f0c2c5f6"
 *                 ratingsAverage:
 *                   type: number
 *                   example: 4.5
 *                 ratingsQuantity:
 *                   type: integer
 *                   example: 100
 *       responses:
 *         '201':
 *           description: Product created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       title:
 *                         type: string
 *                         example: "Product Example"
 *                       description:
 *                         type: string
 *                         example: "This is a detailed description of the product."
 *                       quantity:
 *                         type: integer
 *                         example: 50
 *                       sold:
 *                         type: integer
 *                         example: 0
 *                       price:
 *                         type: number
 *                         example: 200.0
 *                       priceAfterDiscount:
 *                         type: number
 *                         example: 150.0
 *                       colors:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["Red", "Blue"]
 *                       imageCover:
 *                         type: string
 *                         example: "cover-image.jpg"
 *                       images:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["image1.jpg", "image2.jpg"]
 *                       category:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       subcategory:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f5"
 *                       brand:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f6"
 *                       ratingsAverage:
 *                         type: number
 *                         example: 4.5
 *                       ratingsQuantity:
 *                         type: integer
 *                         example: 100
 *         '400':
 *           description: Bad request. Validation error on product data.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "product title must be added"
 *         '401':
 *           description: Unauthorized. Token is missing or invalid.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Unauthorized"
 *         '403':
 *           description: Forbidden. User does not have the correct role (admin/manager).
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Forbidden"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 *
 * paths:
 *   /api/v1/products:
 *     get:
 *       summary: Get a list of products
 *       tags:
 *         - Products
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *             default: 1
 *           description: The page number for pagination.
 *         - in: query
 *           name: limit
 *           schema:
 *             type: integer
 *             default: 20
 *           description: The number of products per page.
 *         - in: query
 *           name: sort
 *           schema:
 *             type: string
 *             example: "price,-createdAt"
 *           description: The sorting order for products. Comma-separated list of fields to sort by. Prefix with `-` for descending order.
 *         - in: query
 *           name: fields
 *           schema:
 *             type: string
 *             example: "title,price,category"
 *           description: Comma-separated list of fields to include in the response.
 *         - in: query
 *           name: searchKeyWord
 *           schema:
 *             type: string
 *             example: "laptop"
 *           description: A keyword to search for in product titles and descriptions.
 *       responses:
 *         '200':
 *           description: List of products
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   results:
 *                     type: integer
 *                     example: 20
 *                   pagination:
 *                     type: object
 *                     properties:
 *                       currentPage:
 *                         type: integer
 *                         example: 1
 *                       totalPages:
 *                         type: integer
 *                         example: 10
 *                       totalDocs:
 *                         type: integer
 *                         example: 200
 *                       limit:
 *                         type: integer
 *                         example: 20
 *                       nextPage:
 *                         type: integer
 *                         example: 2
 *                       prevPage:
 *                         type: integer
 *                         example: null
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "649d8b65e57e3b48f0c2c5f4"
 *                         title:
 *                           type: string
 *                           example: "Product Example"
 *                         description:
 *                           type: string
 *                           example: "This is a detailed description of the product."
 *                         price:
 *                           type: number
 *                           example: 200.0
 *                         priceAfterDiscount:
 *                           type: number
 *                           example: 150.0
 *                         category:
 *                           type: string
 *                           example: "649d8b65e57e3b48f0c2c5f4"
 *                         subcategory:
 *                           type: string
 *                           example: "649d8b65e57e3b48f0c2c5f5"
 *                         brand:
 *                           type: string
 *                           example: "649d8b65e57e3b48f0c2c5f6"
 *                         ratingsAverage:
 *                           type: number
 *                           example: 4.5
 *                         ratingsQuantity:
 *                           type: integer
 *                           example: 100
 *         '400':
 *           description: Bad request. Invalid query parameters.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Invalid query parameters"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 *
 * paths:
 *   /api/v1/products/{id}:
 *     get:
 *       summary: Get a single product by ID
 *       tags:
 *         - Products
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "649d8b65e57e3b48f0c2c5f4"
 *           description: The ID of the product to retrieve.
 *       responses:
 *         '200':
 *           description: A single product
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       title:
 *                         type: string
 *                         example: "Product Example"
 *                       description:
 *                         type: string
 *                         example: "This is a detailed description of the product."
 *                       price:
 *                         type: number
 *                         example: 200.0
 *                       priceAfterDiscount:
 *                         type: number
 *                         example: 150.0
 *                       category:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       subcategory:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f5"
 *                       brand:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f6"
 *                       ratingsAverage:
 *                         type: number
 *                         example: 4.5
 *                       ratingsQuantity:
 *                         type: integer
 *                         example: 100
 *                       reviews:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             user:
 *                               type: string
 *                               example: "649d8b65e57e3b48f0c2c5f7"
 *                             rating:
 *                               type: number
 *                               example: 5
 *                             comment:
 *                               type: string
 *                               example: "Excellent product, highly recommend!"
 *         '400':
 *           description: Bad request. Invalid product ID format.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Invalid MongoDB ID Format"
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "No product found with this id"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 *
 * paths:
 *   /api/v1/products/{id}:
 *     put:
 *       summary: Update a product by ID
 *       tags:
 *         - Products
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "649d8b65e57e3b48f0c2c5f4"
 *           description: The ID of the product to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Updated Product Title"
 *                 description:
 *                   type: string
 *                   example: "Updated product description."
 *                 quantity:
 *                   type: integer
 *                   example: 50
 *                 price:
 *                   type: number
 *                   example: 150.0
 *                 priceAfterDiscount:
 *                   type: number
 *                   example: 120.0
 *                 colors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["red", "blue"]
 *                 imageCover:
 *                   type: string
 *                   example: "product-cover-image.jpg"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["image1.jpg", "image2.jpg"]
 *                 category:
 *                   type: string
 *                   example: "649d8b65e57e3b48f0c2c5f4"
 *                 subcategory:
 *                   type: string
 *                   example: "649d8b65e57e3b48f0c2c5f5"
 *                 brand:
 *                   type: string
 *                   example: "649d8b65e57e3b48f0c2c5f6"
 *                 ratingsAverage:
 *                   type: number
 *                   example: 4.5
 *                 ratingsQuantity:
 *                   type: integer
 *                   example: 200
 *       responses:
 *         '200':
 *           description: Product updated successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       title:
 *                         type: string
 *                         example: "Updated Product Title"
 *                       description:
 *                         type: string
 *                         example: "Updated product description."
 *                       price:
 *                         type: number
 *                         example: 150.0
 *                       priceAfterDiscount:
 *                         type: number
 *                         example: 120.0
 *                       category:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       subcategory:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f5"
 *                       brand:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f6"
 *                       ratingsAverage:
 *                         type: number
 *                         example: 4.5
 *                       ratingsQuantity:
 *                         type: integer
 *                         example: 200
 *         '400':
 *           description: Bad request. Missing or invalid product ID.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "id is missing"
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "No document found with this id"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 *
 * paths:
 *   /api/v1/products/{id}:
 *     delete:
 *       summary: Delete a product by ID
 *       tags:
 *         - Products
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "649d8b65e57e3b48f0c2c5f4"
 *           description: The ID of the product to delete.
 *       responses:
 *         '202':
 *           description: Product deleted successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       title:
 *                         type: string
 *                         example: "Product Title"
 *                       description:
 *                         type: string
 *                         example: "Product description"
 *                       price:
 *                         type: number
 *                         example: 100.0
 *         '400':
 *           description: Bad request. Missing or invalid product ID.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "id is missing"
 *         '404':
 *           description: Product not found.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "No document found with this id"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
