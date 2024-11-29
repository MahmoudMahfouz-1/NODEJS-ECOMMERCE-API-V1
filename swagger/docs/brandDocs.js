/**
 * @swagger
 * tags:
 *   - name: Brands
 *     description: Operations related to brand management
 *
 * paths:
 *   /api/v1/brands:
 *     post:
 *       summary: Creates a new brand with an image and details
 *       tags:
 *         - Brands
 *       security:
 *         - BearerAuth: []  # Requires JWT authentication
 *       requestBody:
 *         description: The brand details along with an image to be added
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the brand (must be between 3 and 32 characters)
 *                   example: "Nike"
 *                   minLength: 3
 *                   maxLength: 32
 *                 description:
 *                   type: string
 *                   description: A short description of the brand
 *                   example: "A leading sportswear brand"
 *                 image:
 *                   type: string
 *                   format: binary
 *                   description: The brand's image (JPEG format)
 *       responses:
 *         '201':
 *           description: Successfully created a new brand
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
 *                         example: "Nike"
 *                       description:
 *                         type: string
 *                         example: "A leading sportswear brand"
 *                       image:
 *                         type: string
 *                         example: "brand-1686532800.jpeg"
 *         '400':
 *           description: Bad request, invalid input data or missing image
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
 *                     example: "Invalid brand details or missing image"
 *         '401':
 *           description: Unauthorized, invalid or missing token
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
 *                     example: "Unauthorized access"
 *         '403':
 *           description: Forbidden, user doesn't have sufficient permissions
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
 *                     example: "You are not authorized to add brands"
 *         '500':
 *           description: Internal server error, failure in image processing or saving brand
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
 *                     example: "Error in creating the brand or processing image"
 */

/**
 * @swagger
 * tags:
 *   - name: Brands
 *     description: Operations related to brand management
 *
 * paths:
 *   /api/v1/brands:
 *     get:
 *       summary: Retrieves a list of brands with optional filtering, sorting, and pagination
 *       tags:
 *         - Brands
 *       parameters:
 *         - name: page
 *           in: query
 *           description: Page number for pagination
 *           required: false
 *           schema:
 *             type: integer
 *             example: 1
 *         - name: limit
 *           in: query
 *           description: Number of brands per page for pagination
 *           required: false
 *           schema:
 *             type: integer
 *             example: 10
 *         - name: sort
 *           in: query
 *           description: Sorting criteria (e.g., 'name', '-name' for descending)
 *           required: false
 *           schema:
 *             type: string
 *             example: "name,-createdAt"
 *         - name: fields
 *           in: query
 *           description: Fields to be returned (e.g., 'name,description')
 *           required: false
 *           schema:
 *             type: string
 *             example: "name,description"
 *         - name: searchKeyWord
 *           in: query
 *           description: Keyword to search brands by name
 *           required: false
 *           schema:
 *             type: string
 *             example: "Nike"
 *       responses:
 *         '200':
 *           description: Successfully retrieved list of brands
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
 *                       limit:
 *                         type: integer
 *                         example: 5
 *                       nextPage:
 *                         type: integer
 *                         example: 2
 *                       prevPage:
 *                         type: integer
 *                         example: 0
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: "Nike"
 *                         description:
 *                           type: string
 *                           example: "A leading sportswear brand"
 *                         image:
 *                           type: string
 *                           example: "brand-1686532800.jpeg"
 *         '400':
 *           description: Invalid query parameters or no brands found
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
 *                     example: "FAIL"
 *                   msg:
 *                     type: string
 *                     example: "Error in retrieving brands"
 */

/**
 * @swagger
 * tags:
 *   - name: Brands
 *     description: Operations related to brand management
 *
 * paths:
 *   /api/v1/brands/{id}:
 *     get:
 *       summary: Retrieves a brand by its ID
 *       tags:
 *         - Brands
 *       parameters:
 *         - name: id
 *           in: path
 *           description: The ID of the brand to retrieve
 *           required: true
 *           schema:
 *             type: string
 *             example: "60b7d8e1cda6d84247dbd06d"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the brand
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
 *                         example: "Nike"
 *                       description:
 *                         type: string
 *                         example: "A leading sportswear brand"
 *                       image:
 *                         type: string
 *                         example: "nike-brand-image.jpeg"
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
 *           description: Brand not found
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
 *                     example: "Brand not found"
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
 *                     example: "Error in retrieving the brand"
 */
/**
 * @swagger
 * tags:
 *   - name: Brands
 *     description: Operations related to brand management
 *
 * paths:
 *   /api/v1/brands/{id}:
 *     put:
 *       summary: Update an existing brand by its ID
 *       tags:
 *         - Brands
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           description: The ID of the brand to update
 *           required: true
 *           schema:
 *             type: string
 *             example: "60b7d8e1cda6d84247dbd06d"
 *         - name: name
 *           in: body
 *           description: The new name of the brand
 *           required: true
 *           schema:
 *             type: string
 *             example: "Nike"
 *       responses:
 *         '200':
 *           description: Successfully updated the brand
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
 *                         example: "Nike"
 *                       description:
 *                         type: string
 *                         example: "A global sportswear brand"
 *         '400':
 *           description: Invalid ID format or validation error
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
 *           description: Brand not found
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
 *                     example: "Error in updating the brand"
 *     delete:
 *       summary: Delete an existing brand by its ID
 *       tags:
 *         - Brands
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           description: The ID of the brand to delete
 *           required: true
 *           schema:
 *             type: string
 *             example: "60b7d8e1cda6d84247dbd06d"
 *       responses:
 *         '202':
 *           description: Successfully deleted the brand
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
 *                         example: "Nike"
 *                       description:
 *                         type: string
 *                         example: "A global sportswear brand"
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
 *           description: Brand not found
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
 *                     example: "Error in deleting the brand"
 */
