/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operations related to users, including registration and profile management
 *
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - BearerAuth: []  # This tells Swagger UI to prompt for the Bearer token if required
 *
 * paths:
 *   /api/v1/users:
 *     post:
 *       summary: Create a new user
 *       security:
 *         - BearerAuth: []  # Explicitly add security here for the lock icon to appear
 *       tags:
 *         - User
 *       requestBody:
 *         description: User object to be created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *                 - passwordConfirm
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "john.doe@example.com"
 *                 phone:
 *                   type: string
 *                   example: "+201234567890"
 *                 profileImg:
 *                   type: string
 *                   example: "profile-pic.jpg"
 *                 password:
 *                   type: string
 *                   example: "myPassword123"
 *                 passwordConfirm:
 *                   type: string
 *                   example: "myPassword123"
 *       responses:
 *         '201':
 *           description: User created successfully
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
 *                         example: "60c72b2f5f1b2c001f1e7f58"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *                       phone:
 *                         type: string
 *                         example: "+201234567890"
 *                       profileImg:
 *                         type: string
 *                         example: "profile-pic.jpg"
 *                       role:
 *                         type: string
 *                         example: "user"
 *                       active:
 *                         type: boolean
 *                         example: true
 *         '400':
 *           description: Invalid input data
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
 *                       type: string
 *                       example: "PasswordConfirm is incorrect"
 *         '409':
 *           description: Email already in use
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
 *                     example: "Email Already in Use"
 */

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operations related to users, including registration and profile management
 *
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - BearerAuth: []  # This tells Swagger UI to prompt for the Bearer token if required
 *
 * paths:
 *   /api/v1/users:
 *     get:
 *       summary: Get list of users
 *       security:
 *         - BearerAuth: []  # Explicitly add security here for the lock icon to appear
 *       tags:
 *         - User
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *             example: 1
 *           description: Page number for pagination
 *         - in: query
 *           name: limit
 *           schema:
 *             type: integer
 *             example: 20
 *           description: Number of users per page
 *         - in: query
 *           name: sort
 *           schema:
 *             type: string
 *             example: "name,-createdAt"
 *           description: Sort users by field(s)
 *         - in: query
 *           name: fields
 *           schema:
 *             type: string
 *             example: "name,email,phone"
 *           description: Fields to include in the response
 *         - in: query
 *           name: searchKeyWord
 *           schema:
 *             type: string
 *             example: "john"
 *           description: Search for users based on keyword
 *       responses:
 *         '200':
 *           description: Successfully retrieved list of users
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
 *                     example: 1
 *                   pagination:
 *                     type: object
 *                     properties:
 *                       currentPage:
 *                         type: integer
 *                         example: 1
 *                       totalPages:
 *                         type: integer
 *                         example: 1
 *                       totalDocs:
 *                         type: integer
 *                         example: 1
 *                       limit:
 *                         type: integer
 *                         example: 20
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "60c72b2f5f1b2c001f1e7f58"
 *                         name:
 *                           type: string
 *                           example: "John Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@example.com"
 *                         phone:
 *                           type: string
 *                           example: "+201234567890"
 *                         role:
 *                           type: string
 *                           example: "user"
 *                         active:
 *                           type: boolean
 *                           example: true
 *         '400':
 *           description: Invalid request parameters
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
 *                       type: string
 *                       example: "Invalid page parameter"
 *         '401':
 *           description: Unauthorized access
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
 *                     example: "Unauthorized"
 *         '500':
 *           description: Server error
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
 *                     example: "Server error"
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/{id}:
 *     get:
 *       summary: Get user by ID
 *       security:
 *         - BearerAuth: []  # This will prompt for the Bearer token if required
 *       tags:
 *         - User
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "60c72b2f5f1b2c001f1e7f58"
 *           description: The unique ID of the user
 *       responses:
 *         '200':
 *           description: Successfully retrieved user data
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
 *                         example: "60c72b2f5f1b2c001f1e7f58"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *                       phone:
 *                         type: string
 *                         example: "+201234567890"
 *                       profileImg:
 *                         type: string
 *                         example: "https://example.com/images/profile.jpg"
 *                       role:
 *                         type: string
 *                         example: "user"
 *                       active:
 *                         type: boolean
 *                         example: true
 *         '400':
 *           description: Invalid ID format
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
 *                       type: string
 *                       example: "Invalid MongoDB ID Format"
 *         '404':
 *           description: User not found
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
 *                     example: "No user found with this id"
 *         '401':
 *           description: Unauthorized access
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
 *                     example: "Unauthorized"
 *         '500':
 *           description: Server error
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
 *                     example: "Server error"
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/{id}:
 *     put:
 *       summary: Update user by ID
 *       security:
 *         - BearerAuth: []  # This will prompt for the Bearer token if required
 *       tags:
 *         - User
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "60c72b2f5f1b2c001f1e7f58"
 *           description: The unique ID of the user to be updated
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Jane Doe"
 *                 email:
 *                   type: string
 *                   example: "jane.doe@example.com"
 *                 phone:
 *                   type: string
 *                   example: "+201234567890"
 *                 profileImg:
 *                   type: string
 *                   example: "https://example.com/images/jane_doe_profile.jpg"
 *                 role:
 *                   type: string
 *                   example: "user"
 *       responses:
 *         '200':
 *           description: Successfully updated user
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
 *                         example: "60c72b2f5f1b2c001f1e7f58"
 *                       name:
 *                         type: string
 *                         example: "Jane Doe"
 *                       email:
 *                         type: string
 *                         example: "jane.doe@example.com"
 *                       phone:
 *                         type: string
 *                         example: "+201234567890"
 *                       profileImg:
 *                         type: string
 *                         example: "https://example.com/images/jane_doe_profile.jpg"
 *                       role:
 *                         type: string
 *                         example: "user"
 *         '400':
 *           description: Invalid ID format or validation error in request body
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
 *                       type: string
 *                       example: "Invalid MongoDB ID Format"
 *         '404':
 *           description: User not found
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
 *                     example: "No user found with this id"
 *         '401':
 *           description: Unauthorized access
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
 *                     example: "Unauthorized"
 *         '500':
 *           description: Server error
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
 *                     example: "Server error"
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/{id}:
 *     delete:
 *       summary: Delete user by ID
 *       security:
 *         - BearerAuth: []  # This will prompt for the Bearer token if required
 *       tags:
 *         - User
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "60c72b2f5f1b2c001f1e7f58"
 *           description: The unique ID of the user to be deleted
 *       responses:
 *         '200':
 *           description: Successfully deleted user
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
 *                         example: "60c72b2f5f1b2c001f1e7f58"
 *                       name:
 *                         type: string
 *                         example: "Jane Doe"
 *                       email:
 *                         type: string
 *                         example: "jane.doe@example.com"
 *                       role:
 *                         type: string
 *                         example: "user"
 *         '400':
 *           description: Invalid ID format or validation error in request body
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
 *                       type: string
 *                       example: "Invalid MongoDB ID Format"
 *         '404':
 *           description: User not found
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
 *                     example: "No user found with this id"
 *         '401':
 *           description: Unauthorized access
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
 *                     example: "Unauthorized"
 *         '500':
 *           description: Server error
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
 *                     example: "Server error"
 */
