/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * tags:
 *   - name: Coupon
 *     description: Operations related to coupons
 *
 * paths:
 *   /api/v1/coupons:
 *     post:
 *       summary: Create a new coupon
 *       tags:
 *         - Coupon
 *       security:
 *         - bearerAuth: [] # This ensures the token is required for this endpoint
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - discount
 *                 - expire
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Unique name for the coupon
 *                   example: "WINTER2024"
 *                 discount:
 *                   type: number
 *                   description: Discount percentage or fixed value
 *                   example: 20
 *                 expire:
 *                   type: string
 *                   format: date
 *                   description: Expiration date of the coupon
 *                   example: "2024-12-31"
 *       responses:
 *         '201':
 *           description: Coupon successfully created
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
 *                       id:
 *                         type: string
 *                         example: "6489f5dfde8ad030c13a1abc"
 *                       name:
 *                         type: string
 *                         example: "WINTER2024"
 *                       discount:
 *                         type: number
 *                         example: 20
 *                       expire:
 *                         type: string
 *                         format: date
 *                         example: "2024-12-31"
 *         '400':
 *           description: Invalid input or missing required fields
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
 *                     example: "Invalid data"
 *         '401':
 *           description: Unauthorized to perform this action
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
 *           description: Internal server error
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
 *   - name: Coupon
 *     description: Operations related to coupons
 *
 * paths:
 *   /api/v1/coupons:
 *     get:
 *       summary: Get a list of coupons
 *       tags:
 *         - Coupon
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: query
 *           name: page
 *           required: false
 *           schema:
 *             type: integer
 *             default: 1
 *           description: The page number for pagination
 *         - in: query
 *           name: limit
 *           required: false
 *           schema:
 *             type: integer
 *             default: 20
 *           description: The number of results per page
 *         - in: query
 *           name: sort
 *           required: false
 *           schema:
 *             type: string
 *           description: Sort results by a field (e.g., createdAt)
 *         - in: query
 *           name: fields
 *           required: false
 *           schema:
 *             type: string
 *           description: Fields to include in the response (e.g., name, discount)
 *         - in: query
 *           name: searchKeyWord
 *           required: false
 *           schema:
 *             type: string
 *           description: Search keyword for filtering coupons by name
 *       responses:
 *         '200':
 *           description: List of coupons retrieved successfully
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
 *                     example: 2
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
 *                         example: 100
 *                       limit:
 *                         type: integer
 *                         example: 20
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "6489f5dfde8ad030c13a1abc"
 *                         name:
 *                           type: string
 *                           example: "WINTER2024"
 *                         discount:
 *                           type: number
 *                           example: 20
 *                         expire:
 *                           type: string
 *                           format: date
 *                           example: "2024-12-31"
 *         '400':
 *           description: Invalid query parameters
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
 *         '401':
 *           description: Unauthorized to perform this action
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
 *           description: Internal server error
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
 *   - name: Coupon
 *     description: Operations related to coupons
 *
 * paths:
 *   /api/v1/coupons/{id}:
 *     get:
 *       summary: Get a coupon by ID
 *       tags:
 *         - Coupon
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier for the coupon
 *           schema:
 *             type: string
 *           example: "6489f5dfde8ad030c13a1abc"
 *       responses:
 *         '200':
 *           description: Coupon successfully retrieved
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
 *                       id:
 *                         type: string
 *                         example: "6489f5dfde8ad030c13a1abc"
 *                       name:
 *                         type: string
 *                         example: "WINTER2024"
 *                       discount:
 *                         type: number
 *                         example: 20
 *                       expire:
 *                         type: string
 *                         format: date
 *                         example: "2024-12-31"
 *         '400':
 *           description: Invalid ID or missing ID parameter
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
 *                     example: "You must enter an ID"
 *         '404':
 *           description: Coupon not found
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
 *                     example: "No category found with this id 6489f5dfde8ad030c13a1abc"
 *         '401':
 *           description: Unauthorized to perform this action
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
 *           description: Internal server error
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
 *   - name: Coupon
 *     description: Operations related to coupons
 *
 * paths:
 *   /api/v1/coupons/{id}:
 *     put:
 *       summary: Update an existing coupon by ID
 *       tags:
 *         - Coupon
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier for the coupon
 *           schema:
 *             type: string
 *           example: "6489f5dfde8ad030c13a1abc"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - expire
 *                 - discount
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the coupon
 *                   example: "SUMMER2024"
 *                 expire:
 *                   type: string
 *                   format: date
 *                   description: The expiration date of the coupon
 *                   example: "2024-08-31"
 *                 discount:
 *                   type: number
 *                   description: The discount value of the coupon (percentage or fixed)
 *                   example: 25
 *       responses:
 *         '200':
 *           description: Coupon successfully updated
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
 *                       id:
 *                         type: string
 *                         example: "6489f5dfde8ad030c13a1abc"
 *                       name:
 *                         type: string
 *                         example: "SUMMER2024"
 *                       expire:
 *                         type: string
 *                         format: date
 *                         example: "2024-08-31"
 *                       discount:
 *                         type: number
 *                         example: 25
 *         '400':
 *           description: Missing or invalid input fields
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
 *           description: Coupon not found with the provided ID
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
 *                     example: "No document found with this id 6489f5dfde8ad030c13a1abc"
 *         '401':
 *           description: Unauthorized to perform this action
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
 *           description: Internal server error
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
 *   - name: Coupon
 *     description: Operations related to coupons
 *
 * paths:
 *   /api/v1/coupons/{id}:
 *     delete:
 *       summary: Delete an existing coupon by ID
 *       tags:
 *         - Coupon
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier for the coupon to be deleted
 *           schema:
 *             type: string
 *           example: "6489f5dfde8ad030c13a1abc"
 *       responses:
 *         '202':
 *           description: Coupon successfully deleted
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
 *                       id:
 *                         type: string
 *                         example: "6489f5dfde8ad030c13a1abc"
 *                       name:
 *                         type: string
 *                         example: "SUMMER2024"
 *                       expire:
 *                         type: string
 *                         format: date
 *                         example: "2024-08-31"
 *                       discount:
 *                         type: number
 *                         example: 25
 *         '404':
 *           description: Coupon not found with the provided ID
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
 *                     example: "No document found with this id 6489f5dfde8ad030c13a1abc"
 *         '401':
 *           description: Unauthorized to perform this action
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
 *           description: Internal server error
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
