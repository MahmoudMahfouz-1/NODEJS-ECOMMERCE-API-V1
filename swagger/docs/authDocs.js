/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Endpoints for authentication (login, signup, etc.)
 *
 * paths:
 *   /api/v1/auth/login:
 *     post:
 *       summary: User login to get a JWT token
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: Credentials required for login (email and password)
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The user's email address
 *                   example: "user@example.com"
 *                 password:
 *                   type: string
 *                   description: The user's password
 *                   example: "password123"
 *               required:
 *                 - email
 *                 - password
 *       responses:
 *         '200':
 *           description: Successfully logged in and received JWT token
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: SUCCESS
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "605c72ef1532071a2c3f0bc6"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "user@example.com"
 *                   token:
 *                     type: string
 *                     description: JWT token for subsequent authenticated requests
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         '400':
 *           description: Bad request, invalid credentials
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: FAIL
 *                   msg:
 *                     type: string
 *                     example: "Invalid credentials"
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: FAIL
 *                   msg:
 *                     type: string
 *                     example: "Server error, please try again later"
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication-related operations
 *
 * paths:
 *   /api/v1/auth/signup:
 *     post:
 *       summary: Create a new user (signup)
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: User details for signing up
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
 *                   description: The email address of the user
 *                   example: "johndoe@example.com"
 *                 password:
 *                   type: string
 *                   description: The password for the user account
 *                   example: "password123"
 *                 passwordConfirm:
 *                   type: string
 *                   description: A confirmation of the password
 *                   example: "password123"
 *                 role:
 *                   type: string
 *                   description: The role of the user (optional)
 *                   example: "user"
 *       responses:
 *         '201':
 *           description: Successfully created a new user and returned a JWT token
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
 *                         example: "60a5ab4d6f5b8b3d9e4f67e3"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "johndoe@example.com"
 *                       role:
 *                         type: string
 *                         example: "user"
 *                   token:
 *                     type: string
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         '400':
 *           description: Bad request, invalid input or missing required fields
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
 *                     example: "PasswordConfirm is incorrect"
 *         '409':
 *           description: Conflict, email already in use
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
 *                     example: "Email Already in Use"
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
 *                     example: "Server error, please try again later"
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication-related operations
 *
 * paths:
 *   /api/v1/auth/forgot-password:
 *     post:
 *       summary: Initiates the password reset process by sending a reset code to the user's email
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: Email address of the user requesting password reset
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The email address of the user who forgot their password
 *                   example: "johndoe@example.com"
 *       responses:
 *         '200':
 *           description: Successfully sent the password reset code to the user's email
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
 *                     example: "A reset code has been sent to your Email johndoe@example.com"
 *         '400':
 *           description: Bad request, invalid or missing email
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
 *                     example: "Email is required"
 *         '404':
 *           description: User not found with the provided email
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
 *                     example: "There is no user with this email johndoe@example.com"
 *         '500':
 *           description: Internal server error, failure in sending the reset code via email
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
 *                     example: "There is an error in sending email"
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication-related operations
 *
 * paths:
 *   /api/v1/auth/verify-reset-code:
 *     post:
 *       summary: Verifies the password reset code for the user
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: The reset code sent to the user’s email for verifying password reset
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resetCode:
 *                   type: string
 *                   description: The reset code sent to the user's email
 *                   example: "123456"
 *       responses:
 *         '200':
 *           description: Successfully verified the reset code
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
 *                     example: "Reset Code verified"
 *         '400':
 *           description: Bad request, missing or invalid reset code
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
 *                     example: "Reset code is required"
 *         '404':
 *           description: Invalid or expired reset code
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
 *                     example: "Invalid ResetCode or Expired Reset Code"
 *         '500':
 *           description: Internal server error, failure to verify the reset code
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
 *                     example: "There was an error in verifying the reset code"
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication-related operations
 *
 * paths:
 *   /api/v1/auth/reset-password:
 *     post:
 *       summary: Resets the user's password using the verified reset code
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: User provides their email and the new password after the reset code is verified
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The user's email address
 *                   example: "user@example.com"
 *                 newPassword:
 *                   type: string
 *                   description: The new password to set for the user
 *                   example: "newpassword123"
 *       responses:
 *         '200':
 *           description: Password has been successfully reset
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
 *                     example: "The new password has been set successfully"
 *                   token:
 *                     type: string
 *                     description: The new JWT token for the user
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2Y..."
 *         '400':
 *           description: Bad request, reset code not verified or invalid data
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
 *                     example: "Reset Code is not verified"
 *         '404':
 *           description: User not found based on the provided email
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
 *                     example: "There is no user with this Email"
 *         '500':
 *           description: Internal server error, failure to reset password
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
 *                     example: "There was an error in resetting the password"
 */
