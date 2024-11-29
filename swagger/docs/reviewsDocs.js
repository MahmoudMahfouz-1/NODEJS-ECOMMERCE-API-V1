/**
 * @swagger
 * tags:
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * paths:
 *   /api/v1/products/{productId}/reviews:
 *     get:
 *       summary: Get all reviews for a product
 *       tags:
 *         - Reviews
 *       parameters:
 *         - in: path
 *           name: productId
 *           required: true
 *           schema:
 *             type: string
 *             example: "671a8ca4ddcf7a9db254d0da"
 *           description: The ID of the product to retrieve reviews for.
 *       responses:
 *         '200':
 *           description: Successfully fetched reviews for the product.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "64f5a8d5f5bc4d7db3099f34"
 *                         user:
 *                           type: string
 *                           example: "User123"
 *                         product:
 *                           type: string
 *                           example: "671a8ca4ddcf7a9db254d0da"
 *                         rating:
 *                           type: number
 *                           example: 4.5
 *                         comment:
 *                           type: string
 *                           example: "Great product! Totally worth the price."
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Bad request. Invalid or missing product ID.
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
 *                     example: "Invalid product ID"
 *         '404':
 *           description: Product not found or no reviews available for the product.
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
 *                     example: "No reviews found for this product"
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * paths:
 *   /api/v1/products/{productId}/reviews/{id}:
 *     get:
 *       summary: Get a specific review for a product
 *       tags:
 *         - Reviews
 *       parameters:
 *         - in: path
 *           name: productId
 *           required: true
 *           schema:
 *             type: string
 *             example: "671a8ca4ddcf7a9db254d0da"
 *           description: The ID of the product to retrieve the review for.
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "67375dbec20cbdafa5962bd8"
 *           description: The ID of the review to retrieve.
 *       responses:
 *         '200':
 *           description: Successfully fetched the specific review for the product.
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
 *                         example: "67375dbec20cbdafa5962bd8"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671a8ca4ddcf7a9db254d0da"
 *                       rating:
 *                         type: number
 *                         example: 4.5
 *                       comment:
 *                         type: string
 *                         example: "Great product! Totally worth the price."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Bad request. Invalid or missing product ID or review ID.
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
 *                     example: "Invalid product ID or review ID"
 *         '404':
 *           description: Product or review not found.
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
 *                     example: "No review found for this product with the provided review ID"
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * security:
 *   - BearerAuth: []  # Enforcing JWT token required for authorization globally
 *
 * paths:
 *   /api/v1/products/{productId}/reviews:
 *     post:
 *       summary: Create a review for a product
 *       tags:
 *         - Reviews
 *       security:
 *         - BearerAuth: []  # Enforcing JWT token required for this specific operation
 *       parameters:
 *         - in: path
 *           name: productId
 *           required: true
 *           schema:
 *             type: string
 *             example: "671a8ca4ddcf7a9db254d0da"
 *           description: The ID of the product to create the review for.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Title of the review
 *                   example: "Great product!"
 *                 ratings:
 *                   type: number
 *                   description: Rating for the product (1-5)
 *                   example: 4
 *                 comment:
 *                   type: string
 *                   description: The review comment
 *                   example: "This is an amazing product! Highly recommend."
 *       responses:
 *         '201':
 *           description: Successfully created the review.
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
 *                         example: "67375dbec20cbdafa5962bd8"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671a8ca4ddcf7a9db254d0da"
 *                       ratings:
 *                         type: number
 *                         example: 4
 *                       comment:
 *                         type: string
 *                         example: "This is an amazing product! Highly recommend."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Bad request. Missing or invalid data for review.
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
 *                     example: "Invalid rating or comment"
 *         '401':
 *           description: Unauthorized. Token is required to create a review.
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
 *                     example: "No product found with this ID"
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
 *
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * security:
 *   - BearerAuth: []  # Enforcing JWT token required for authorization
 *
 * paths:
 *   /api/v1/reviews:
 *     post:
 *       summary: Create a review for a product
 *       tags:
 *         - Reviews
 *       security:
 *         - BearerAuth: []  # Enforcing JWT token required for this specific operation
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Title of the review
 *                   example: "This product is amazing!"
 *                 ratings:
 *                   type: number
 *                   description: Rating for the product (1-5)
 *                   example: 4
 *                 comment:
 *                   type: string
 *                   description: The review comment
 *                   example: "This product exceeded my expectations. I highly recommend it."
 *                 product:
 *                   type: string
 *                   description: The product ID to create a review for
 *                   example: "671bcedcabf11155270fdbb7"
 *       responses:
 *         '201':
 *           description: Successfully created the review.
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
 *                         example: "67375dbec20cbdafa5962bd8"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671bcedcabf11155270fdbb7"
 *                       ratings:
 *                         type: number
 *                         example: 4
 *                       comment:
 *                         type: string
 *                         example: "This product exceeded my expectations."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Bad request. Missing or invalid data for review.
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
 *                     example: "Invalid rating or comment"
 *         '401':
 *           description: Unauthorized. Token is required to create a review.
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
 *
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * paths:
 *   /api/v1/reviews:
 *     get:
 *       summary: Get list of reviews
 *       tags:
 *         - Reviews
 *       parameters:
 *         - in: query
 *           name: page
 *           description: The page number for pagination.
 *           required: false
 *           schema:
 *             type: integer
 *             example: 1
 *         - in: query
 *           name: limit
 *           description: The number of reviews per page.
 *           required: false
 *           schema:
 *             type: integer
 *             example: 10
 *         - in: query
 *           name: sort
 *           description: Field(s) to sort the reviews by. Multiple fields can be separated by a comma.
 *           required: false
 *           schema:
 *             type: string
 *             example: "createdAt,-ratings"
 *         - in: query
 *           name: fields
 *           description: Fields to include in the response. Multiple fields can be separated by a comma.
 *           required: false
 *           schema:
 *             type: string
 *             example: "title,ratings,product"
 *         - in: query
 *           name: searchKeyWord
 *           description: Keyword to search for in reviews (like product name or review title).
 *           required: false
 *           schema:
 *             type: string
 *             example: "amazing"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the list of reviews.
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
 *                     example: 5
 *                   pagination:
 *                     type: object
 *                     properties:
 *                       currentPage:
 *                         type: integer
 *                         example: 1
 *                       totalPages:
 *                         type: integer
 *                         example: 2
 *                       totalDocs:
 *                         type: integer
 *                         example: 10
 *                       limit:
 *                         type: integer
 *                         example: 10
 *                       nextPage:
 *                         type: integer
 *                         example: 2
 *                       prevPage:
 *                         type: integer
 *                         example: 1
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "67375dbec20cbdafa5962bd8"
 *                         user:
 *                           type: string
 *                           example: "User123"
 *                         product:
 *                           type: string
 *                           example: "671bcedcabf11155270fdbb7"
 *                         title:
 *                           type: string
 *                           example: "This product is amazing!"
 *                         ratings:
 *                           type: number
 *                           example: 4
 *                         comment:
 *                           type: string
 *                           example: "This product exceeded my expectations."
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Bad request. Invalid query parameters or missing required fields.
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
 *                     example: "Invalid pagination parameters."
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * paths:
 *   /api/v1/reviews/{id}:
 *     get:
 *       summary: Get a review by ID
 *       tags:
 *         - Reviews
 *       parameters:
 *         - in: path
 *           name: id
 *           description: The ID of the review to retrieve.
 *           required: true
 *           schema:
 *             type: string
 *             example: "5f1d7b6f1f1e3d23d8614c7f"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the review.
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
 *                         example: "5f1d7b6f1f1e3d23d8614c7f"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671bcedcabf11155270fdbb7"
 *                       title:
 *                         type: string
 *                         example: "This product is amazing!"
 *                       ratings:
 *                         type: number
 *                         example: 4
 *                       comment:
 *                         type: string
 *                         example: "Exceeded my expectations."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Invalid MongoDB ID format.
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
 *           description: No review found with the given ID.
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
 *                     example: "No review found with this id 5f1d7b6f1f1e3d23d8614c7f"
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
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - BearerAuth: []  # This tells Swagger UI to prompt for the Bearer token
 *
 * paths:
 *   /api/v1/reviews/{id}:
 *     put:
 *       summary: Update a review by ID
 *       tags:
 *         - Reviews
 *       security:
 *         - BearerAuth: []  # This applies Bearer authentication to this route
 *       parameters:
 *         - in: path
 *           name: id
 *           description: The ID of the review to update.
 *           required: true
 *           schema:
 *             type: string
 *             example: "5f1d7b6f1f1e3d23d8614c7f"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Updated Review Title"
 *                 ratings:
 *                   type: number
 *                   example: 4
 *       responses:
 *         '200':
 *           description: Successfully updated the review.
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
 *                         example: "5f1d7b6f1f1e3d23d8614c7f"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671bcedcabf11155270fdbb7"
 *                       title:
 *                         type: string
 *                         example: "Updated Review Title"
 *                       ratings:
 *                         type: number
 *                         example: 4
 *                       comment:
 *                         type: string
 *                         example: "Updated the review after further testing."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Invalid MongoDB ID format or missing ID.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "Invalid MongoDB ID format or missing ID."
 *         '404':
 *           description: Review not found or unauthorized to update the review.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "No review found with this id."
 *         '403':
 *           description: Unauthorized access - user is not allowed to update the review.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "You are not authorized to perform this action."
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "Internal server error."
 */

/**
 * @swagger
 * tags:
 *   - name: Reviews
 *     description: Operations related to reviews
 *
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - BearerAuth: []  # This tells Swagger UI to prompt for the Bearer token
 *
 * paths:
 *   /api/v1/reviews/{id}:
 *     delete:
 *       summary: Delete a review by ID
 *       tags:
 *         - Reviews
 *       security:
 *         - BearerAuth: []  # This applies Bearer authentication to this route
 *       parameters:
 *         - in: path
 *           name: id
 *           description: The ID of the review to delete.
 *           required: true
 *           schema:
 *             type: string
 *             example: "5f1d7b6f1f1e3d23d8614c7f"
 *       responses:
 *         '202':
 *           description: Successfully deleted the review.
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
 *                         example: "5f1d7b6f1f1e3d23d8614c7f"
 *                       user:
 *                         type: string
 *                         example: "User123"
 *                       product:
 *                         type: string
 *                         example: "671bcedcabf11155270fdbb7"
 *                       title:
 *                         type: string
 *                         example: "Sample Review Title"
 *                       ratings:
 *                         type: number
 *                         example: 5
 *                       comment:
 *                         type: string
 *                         example: "This is a great product!"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Invalid MongoDB ID format or missing ID.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "Invalid MongoDB ID format or missing ID."
 *         '404':
 *           description: Review not found or unauthorized to delete the review.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "No review found with this id."
 *         '403':
 *           description: Unauthorized access - user is not allowed to delete the review.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "You are not authorized to perform this action."
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   message:
 *                     type: string
 *                     example: "Internal server error."
 */
