/**
 * @swagger
 * paths:
 *   /api/v1/users/changePassword/{id}:
 *     put:
 *       summary: Change user password by ID
 *       tags:
 *         - Logged-User
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             example: "60c72b2f5f1b2c001f1e7f58"
 *           description: The unique ID of the user
 *         - in: body
 *           name: body
 *           required: true
 *           description: User password change details
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 example: "currentPass123"
 *                 description: The current password of the user
 *               password:
 *                 type: string
 *                 example: "newPass123"
 *                 description: The new password for the user
 *               passwordConfirm:
 *                 type: string
 *                 example: "newPass123"
 *                 description: Confirmation of the new password
 *       responses:
 *         '200':
 *           description: Successfully changed password
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
 *                       passChangedAt:
 *                         type: string
 *                         example: "2024-11-29T10:30:00.000Z"
 *         '400':
 *           description: Bad request, invalid password or ID
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
 *   /api/v1/users/getMe:
 *     get:
 *       summary: Get logged user data
 *       tags:
 *         - Logged-User
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully retrieved logged user data
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
 *                         example: "1234567890"
 *                       profileImg:
 *                         type: string
 *                         example: "/path/to/image.jpg"
 *                       role:
 *                         type: string
 *                         example: "user"
 *                       active:
 *                         type: boolean
 *                         example: true
 *         '401':
 *           description: Unauthorized, no valid token provided
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
 *                     example: "You are not logged in! Please log in to get access."
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
 *   /api/v1/users/changeMyPassword:
 *     put:
 *       summary: Change the logged-in user's password
 *       tags:
 *         - Logged-User
 *       security:
 *         - BearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 currentPassword:
 *                   type: string
 *                   description: Current password of the logged-in user
 *                   example: "currentPassword123"
 *                 password:
 *                   type: string
 *                   description: New password for the user
 *                   example: "newPassword123"
 *                 passwordConfirm:
 *                   type: string
 *                   description: Confirmation of the new password
 *                   example: "newPassword123"
 *       responses:
 *         '200':
 *           description: Successfully changed the password
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
 *                       role:
 *                         type: string
 *                         example: "user"
 *                   token:
 *                     type: string
 *                     description: New JWT token after password change
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         '400':
 *           description: Missing current password or password confirmation mismatch
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
 *                     example: "Password confirmation doesn't match."
 *         '401':
 *           description: Unauthorized, no valid token provided
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
 *                     example: "You are not logged in! Please log in to get access."
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
 *   /api/v1/users/updateMe:
 *     put:
 *       summary: Update the logged-in user's data (name, email, phone)
 *       tags:
 *         - Logged-User
 *       security:
 *         - BearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the user
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                   example: "john.doe@example.com"
 *                 phone:
 *                   type: string
 *                   description: The phone number of the user (only for EG or SA)
 *                   example: "+20123456789"
 *       responses:
 *         '200':
 *           description: Successfully updated user data
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
 *                         example: "+20123456789"
 *         '400':
 *           description: Validation error, invalid email format or phone number
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
 *                     example: "Invalid email format or phone number."
 *         '401':
 *           description: Unauthorized, no valid token provided
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
 *                     example: "You are not logged in! Please log in to get access."
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
 *   /api/v1/users/deleteMe:
 *     delete:
 *       summary: Deactivate (delete) the logged-in user's account
 *       tags:
 *         - Logged-User
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully deactivated the user's account
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   data:
 *                     type: string
 *                     example: "user deleted successfully"
 *         '401':
 *           description: Unauthorized, no valid token provided
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
 *                     example: "You are not logged in! Please log in to get access."
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
