/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the user
 *           example: "638f2b1c2a0f7c9123456789"
 *         name:
 *           type: string
 *           description: Name of the user
 *           example: "John Doe"
 *         slug:
 *           type: string
 *           description: URL-friendly version of the user name
 *           example: "john-doe"
 *         email:
 *           type: string
 *           description: Email address of the user
 *           example: "johndoe@example.com"
 *         phone:
 *           type: string
 *           description: Phone number of the user
 *           example: "+1234567890"
 *         profileImg:
 *           type: string
 *           description: URL of the user's profile image
 *           example: "http://example.com/images/johndoe.jpg"
 *         password:
 *           type: string
 *           description: The password for the user (hashed before storing)
 *           example: "hashedpassword123"
 *         role:
 *           type: string
 *           enum: ['user', 'admin', 'manager']
 *           description: Role of the user within the application
 *           example: "user"
 *         active:
 *           type: boolean
 *           description: Whether the user account is active
 *           example: true
 *         wishlist:
 *           type: array
 *           items:
 *             type: string
 *             description: IDs of products in the user's wishlist
 *           example: ["638f2b1c2a0f7c9123456789"]
 *         addresses:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Unique identifier for the address
 *                 example: "638f2b1c2a0f7c9123456790"
 *               alias:
 *                 type: string
 *                 description: Alias for the address (e.g., "Home", "Office")
 *                 example: "Home"
 *               details:
 *                 type: string
 *                 description: Address details (street, building, etc.)
 *                 example: "123 Main St, Apt 4B"
 *               phone:
 *                 type: string
 *                 description: Contact phone number for the address
 *                 example: "+1234567890"
 *               city:
 *                 type: string
 *                 description: City of the address
 *                 example: "New York"
 *               postalCode:
 *                 type: string
 *                 description: Postal code of the address
 *                 example: "10001"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was last updated
 *           example: "2023-11-28T15:00:12.123Z"
 *       required:
 *         - name
 *         - email
 *         - password
 */
