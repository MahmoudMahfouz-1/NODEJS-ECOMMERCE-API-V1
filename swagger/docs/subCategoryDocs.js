/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
 *
 * paths:
 *   /api/v1/categories/{categoryId}/subcategories:
 *     post:
 *       summary: Create a new subcategory under a specific category
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: categoryId
 *           in: path
 *           required: true
 *           description: ID of the category to create a subcategory under
 *           schema:
 *             type: string
 *             example: "670d2c36ffaabecc146b8629"
 *       requestBody:
 *         description: Subcategory details to be added under the specified category
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the subcategory
 *                   example: "Mobile Phones"
 *       responses:
 *         '201':
 *           description: Subcategory created successfully under the category
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
 *                       name:
 *                         type: string
 *                         example: "Mobile Phones"
 *                       category:
 *                         type: string
 *                         example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid data provided
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
 *                     example: "Subcategory name is required"
 *         '401':
 *           description: Unauthorized, user does not have permission
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
 *                     example: "You are not authorized to perform this action"
 *         '404':
 *           description: Category not found
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
 *                     example: "Category not found"
 *         '422':
 *           description: Validation error for input data
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
 *                     example: "Subcategory name must be at least 3 characters"
 */

/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
 *
 * paths:
 *   /api/v1/categories/{categoryId}/subcategories:
 *     get:
 *       summary: Get all subcategories for a specific category
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: categoryId
 *           in: path
 *           required: true
 *           description: ID of the category to fetch subcategories for
 *           schema:
 *             type: string
 *             example: "670d2c36ffaabecc146b8629"
 *       responses:
 *         '200':
 *           description: Successfully retrieved subcategories for the category
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
 *                         name:
 *                           type: string
 *                           example: "Mobile Phones"
 *                         category:
 *                           type: string
 *                           example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid category ID provided
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
 *                     example: "Invalid category ID"
 *         '404':
 *           description: Category not found
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
 *                     example: "Category not found"
 */

/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
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
 *   /api/v1/categories/{categoryId}/subcategories:
 *     get:
 *       summary: Get all subcategories for a specific category
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: categoryId
 *           in: path
 *           required: true
 *           description: ID of the category to fetch subcategories for
 *           schema:
 *             type: string
 *             example: "670d2c36ffaabecc146b8629"
 *       responses:
 *         '200':
 *           description: Successfully retrieved subcategories for the category
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
 *                         name:
 *                           type: string
 *                           example: "Mobile Phones"
 *                         category:
 *                           type: string
 *                           example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid category ID provided
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
 *                     example: "Invalid category ID"
 *         '404':
 *           description: Category not found
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
 *                     example: "Category not found"
 *
 *   /api/v1/subcategories:
 *     post:
 *       summary: Create a new subcategory
 *       tags:
 *         - SubCategory
 *       security:
 *         - BearerAuth: []  # This applies Bearer authentication to this route
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "lenovo"
 *                 category:
 *                   type: string
 *                   example: "670a73b813440435e8cf4f97"
 *       responses:
 *         '201':
 *           description: Successfully created a new subcategory.
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
 *                       name:
 *                         type: string
 *                         example: "lenovo"
 *                       category:
 *                         type: string
 *                         example: "670a73b813440435e8cf4f97"
 *                       slug:
 *                         type: string
 *                         example: "lenovo"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:34:56Z"
 *         '400':
 *           description: Invalid input or missing parameters.
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
 *                     example: "SubCategory is required"
 *         '401':
 *           description: Unauthorized access - user needs to be an admin or manager.
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
 *                     example: "Unauthorized access"
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
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
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
 *   /api/v1/subcategories:
 *     get:
 *       summary: Get a list of all subcategories with filtering, sorting, and pagination
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: page
 *           in: query
 *           description: Page number for pagination (default is 1)
 *           required: false
 *           schema:
 *             type: integer
 *             example: 1
 *         - name: limit
 *           in: query
 *           description: Limit the number of subcategories per page (default is 20)
 *           required: false
 *           schema:
 *             type: integer
 *             example: 20
 *         - name: sort
 *           in: query
 *           description: Sorting order (e.g., '-createdAt' for descending order)
 *           required: false
 *           schema:
 *             type: string
 *             example: '-createdAt'
 *         - name: fields
 *           in: query
 *           description: Fields to include in the response (e.g., 'name,category')
 *           required: false
 *           schema:
 *             type: string
 *             example: 'name,category'
 *         - name: searchKeyWord
 *           in: query
 *           description: Search keyword to filter records (e.g., 'mobile')
 *           required: false
 *           schema:
 *             type: string
 *             example: 'mobile'
 *       responses:
 *         '200':
 *           description: Successfully retrieved subcategories
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
 *                         example: 10
 *                       totalDocs:
 *                         type: integer
 *                         example: 50
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
 *                         name:
 *                           type: string
 *                           example: "Mobile Phones"
 *                         category:
 *                           type: string
 *                           example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid query parameters (e.g., invalid page, limit, sort)
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
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
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
 *   /api/v1/subcategories/{id}:
 *     get:
 *       summary: Get a subcategory by ID
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the subcategory to fetch
 *           schema:
 *             type: string
 *             example: "670a73b813440435e8cf4f97"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the subcategory
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
 *                       name:
 *                         type: string
 *                         example: "Mobile Phones"
 *                       category:
 *                         type: string
 *                         example: "670a73b813440435e8cf4f97"
 *         '400':
 *           description: Invalid ID format
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
 *           description: No subcategory found with the provided ID
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
 *                     example: "No category found with this id 670a73b813440435e8cf4f97"
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   msg:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
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
 *   /api/v1/subcategories/{id}:
 *     put:
 *       summary: Update a subcategory by ID
 *       security:
 *         - BearerAuth: []  # Explicitly add security here for the lock icon to appear
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the subcategory to update
 *           schema:
 *             type: string
 *             example: "670d2c36ffaabecc146b8629"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Updated SubCategory"
 *       responses:
 *         '200':
 *           description: Successfully updated the subcategory
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
 *                       name:
 *                         type: string
 *                         example: "Updated SubCategory"
 *                       category:
 *                         type: string
 *                         example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid request, possibly due to bad data or missing fields
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   errors:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         msg:
 *                           type: string
 *                           example: "Name is required"
 *                         param:
 *                           type: string
 *                           example: "name"
 *         '404':
 *           description: Subcategory not found with the provided ID
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
 *                     example: "No subcategory found with this id 670d2c36ffaabecc146b8629"
 */

/**
 * @swagger
 * tags:
 *   - name: SubCategory
 *     description: Operations related to subcategories under a specific category
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
 *   /api/v1/subcategories/{id}:
 *     delete:
 *       summary: Delete a subcategory by ID
 *       security:
 *         - BearerAuth: []  # Explicitly add security here for the lock icon to appear
 *       tags:
 *         - SubCategory
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the subcategory to delete
 *           schema:
 *             type: string
 *             example: "670d2c36ffaabecc146b8629"
 *       responses:
 *         '202':
 *           description: Successfully deleted the subcategory
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
 *                       name:
 *                         type: string
 *                         example: "SubCategory Name"
 *                       category:
 *                         type: string
 *                         example: "670d2c36ffaabecc146b8629"
 *         '400':
 *           description: Invalid request, possibly due to bad data or missing fields
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "ERROR"
 *                   errors:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         msg:
 *                           type: string
 *                           example: "Invalid MongoDB ID Format"
 *                         param:
 *                           type: string
 *                           example: "id"
 *         '404':
 *           description: Subcategory not found with the provided ID
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
 *                     example: "No subcategory found with this id 670d2c36ffaabecc146b8629"
 */
