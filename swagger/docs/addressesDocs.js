/**
 * @swagger
 * tags:
 *   - name: Addresses
 *     description: Endpoints for managing user addresses
 *
 * paths:
 *   /api/v1/addresses:
 *     post:
 *       summary: Add a new address for the logged-in user
 *       tags:
 *         - Addresses
 *       security:
 *         - BearerAuth: []  # Correctly referencing the security scheme defined in swagger.js
 *       requestBody:
 *         description: Address details to be added to the user's address book
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 alias:
 *                   type: string
 *                   description: The alias or name for the address (e.g., "Home", "Work").
 *                 details:
 *                   type: string
 *                   description: Full address details (e.g., "123 Main St, Apt 4").
 *                 phone:
 *                   type: string
 *                   description: Contact phone number for this address.
 *                 city:
 *                   type: string
 *                   description: City name.
 *                 postalCode:
 *                   type: string
 *                   description: Postal code.
 *               required:
 *                 - alias
 *                 - details
 *                 - phone
 *                 - city
 *                 - postalCode
 *       responses:
 *         '200':
 *           description: Successfully added a new address to the user's account
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: SUCCESS
 *                   msg:
 *                     type: string
 *                     example: Address added successfully
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         alias:
 *                           type: string
 *                           example: "Home"
 *                         details:
 *                           type: string
 *                           example: "123 Main St, Apt 4"
 *                         phone:
 *                           type: string
 *                           example: "123-456-7890"
 *                         city:
 *                           type: string
 *                           example: "New York"
 *                         postalCode:
 *                           type: string
 *                           example: "10001"
 *         '401':
 *           description: Unauthorized access or invalid token
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
 *                     example: "Please login to access this route"
 *         '403':
 *           description: Forbidden access, insufficient role
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
 *                     example: "You aren't authorized to access this route"
 *         '400':
 *           description: Bad request, invalid address data or missing required fields
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
 *                     example: "Missing required fields in the address data"
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
 *   - name: Addresses
 *     description: Endpoints for managing user addresses
 *
 * paths:
 *   /api/v1/addresses/{addressId}:
 *     delete:
 *       summary: Remove an address from the user's address book
 *       tags:
 *         - Addresses
 *       security:
 *         - BearerAuth: []  # Referencing the security scheme here
 *       parameters:
 *         - name: addressId
 *           in: path
 *           description: The ID of the address to remove
 *           required: true
 *           schema:
 *             type: string
 *             example: "60c72b2f9b0d3d1a2c8d1f34"
 *       responses:
 *         '200':
 *           description: Successfully removed the address from the user's account
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: SUCCESS
 *                   msg:
 *                     type: string
 *                     example: "Address removed successfully"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         alias:
 *                           type: string
 *                           example: "Home"
 *                         details:
 *                           type: string
 *                           example: "123 Main St, Apt 4"
 *                         phone:
 *                           type: string
 *                           example: "123-456-7890"
 *                         city:
 *                           type: string
 *                           example: "New York"
 *                         postalCode:
 *                           type: string
 *                           example: "10001"
 *         '401':
 *           description: Unauthorized access or invalid token
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
 *                     example: "Please login to access this route"
 *         '403':
 *           description: Forbidden access, insufficient role
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
 *                     example: "You aren't authorized to access this route"
 *         '404':
 *           description: Address not found for removal
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
 *                     example: "Address not found"
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
 *   - name: Addresses
 *     description: Endpoints for managing user addresses
 *
 * paths:
 *   /api/v1/addresses:
 *     get:
 *       summary: Retrieve a list of addresses for the logged-in user
 *       tags:
 *         - Addresses
 *       security:
 *         - BearerAuth: []  # Referencing the security scheme here
 *       responses:
 *         '200':
 *           description: Successfully retrieved the list of addresses for the logged-in user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: SUCCESS
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         alias:
 *                           type: string
 *                           example: "Home"
 *                         details:
 *                           type: string
 *                           example: "123 Main St, Apt 4"
 *                         phone:
 *                           type: string
 *                           example: "123-456-7890"
 *                         city:
 *                           type: string
 *                           example: "New York"
 *                         postalCode:
 *                           type: string
 *                           example: "10001"
 *         '401':
 *           description: Unauthorized access or invalid token
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
 *                     example: "Please login to access this route"
 *         '403':
 *           description: Forbidden access, insufficient role
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
 *                     example: "You aren't authorized to access this route"
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
