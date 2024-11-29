/**
 * @swagger
 * paths:
 *   /api/v1/categories:
 *     post:
 *       summary: Add a new category
 *       tags:
 *         - Category
 *       security:
 *         - bearerAuth: []  # Indicates authentication is required
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the category
 *                   example: "Electronics"
 *                 description:
 *                   type: string
 *                   description: Description of the category
 *                   example: "Devices and gadgets"
 *       responses:
 *         '201':
 *           description: Category successfully created
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
 *                         example: "Electronics"
 *                       description:
 *                         type: string
 *                         example: "Devices and gadgets"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-28T10:00:00Z"
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
 *                     example: "Category name is required"
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
 *         '403':
 *           description: Forbidden action (requires admin/manager role)
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
 * paths:
 *   /api/v1/categories:
 *     get:
 *       summary: Get a list of all categories
 *       tags:
 *         - Category
 *       parameters:
 *         - name: page
 *           in: query
 *           description: |
 *             Page number for pagination.
 *             Example: 1
 *           required: false
 *           schema:
 *             type: integer
 *             example: 1
 *         - name: limit
 *           in: query
 *           description: |
 *             Number of categories to return per page.
 *             Example: 10
 *           required: false
 *           schema:
 *             type: integer
 *             example: 10
 *         - name: sort
 *           in: query
 *           description: |
 *             Sorting criteria. Use a comma to separate fields.
 *             Example: "name,-createdAt".
 *           required: false
 *           schema:
 *             type: string
 *             example: "name,-createdAt"
 *         - name: fields
 *           in: query
 *           description: |
 *             Fields to include in the response.
 *             Example: "name,description".
 *           required: false
 *           schema:
 *             type: string
 *             example: "name,description"
 *         - name: searchKeyWord
 *           in: query
 *           description: |
 *             Search categories by a keyword.
 *             Search by name or description.
 *             Example: "electronics".
 *           required: false
 *           schema:
 *             type: string
 *             example: "electronics"
 *       responses:
 *         '200':
 *           description: Successfully retrieved categories list
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
 *                           example: "Electronics"
 *                         description:
 *                           type: string
 *                           example: "Devices and gadgets"
 */

/**
 * @swagger
 * paths:
 *   /api/v1/categories/{id}:
 *     get:
 *       summary: Get a category by ID
 *       tags:
 *         - Category
 *       parameters:
 *         - name: id
 *           in: path
 *           description: |
 *             The unique identifier of the category to retrieve.
 *           required: true
 *           schema:
 *             type: string
 *             example: "648d8e94b47f4e1f2a9e089c"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the category
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
 *                         example: "Electronics"
 *                       description:
 *                         type: string
 *                         example: "Devices and gadgets"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-28T10:00:00Z"
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
 *                     example: "Invalid MongoDB ID"
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
 *                     example: "No category found with this ID"
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
 * paths:
 *   /api/v1/categories/{id}:
 *     put:
 *       summary: Update an existing category
 *       tags:
 *         - Category
 *       security:
 *         - bearerAuth: []  # Indicates authentication is required
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the category to update
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
 *                   description: Updated name of the category
 *                   example: "Updated Electronics"
 *                 description:
 *                   type: string
 *                   description: Updated description of the category
 *                   example: "Updated devices and gadgets"
 *       responses:
 *         '200':
 *           description: Successfully updated the category
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
 *                         example: "Updated Electronics"
 *                       description:
 *                         type: string
 *                         example: "Updated devices and gadgets"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T12:00:00Z"
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
 *                     example: "Invalid category ID or update data"
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
 *         '403':
 *           description: Forbidden action (requires admin/manager role)
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
 *                     example: "No category found with the provided ID"
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
 * paths:
 *   /api/v1/categories/{id}:
 *     delete:
 *       summary: Delete a category
 *       tags:
 *         - Category
 *       security:
 *         - bearerAuth: []  # Indicates authentication is required
 *       parameters:
 *         - name: id
 *           in: path
 *           description: |
 *             The unique identifier of the category to delete.
 *           required: true
 *           schema:
 *             type: string
 *             example: "648d8e94b47f4e1f2a9e089c"
 *       responses:
 *         '202':
 *           description: Successfully deleted the category
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
 *                         example: "Electronics"
 *                       description:
 *                         type: string
 *                         example: "Devices and gadgets"
 *                       deletedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-28T12:30:00Z"
 *         '400':
 *           description: Invalid category ID
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
 *         '403':
 *           description: Forbidden action (requires admin/manager role)
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
 *                     example: "No category found with this ID"
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
