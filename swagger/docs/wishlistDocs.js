/**
 * @swagger
 * paths:
 *   /api/v1/wishlist:
 *     post:
 *       summary: Add product to user's wishlist
 *       tags:
 *         - Wishlist
 *       security:
 *         - BearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: string
 *                   description: The ID of the product to add to the wishlist
 *                   example: "5f6d5f7c7b1a0a001c8d6c4f"
 *       responses:
 *         '200':
 *           description: Successfully added the product to the wishlist
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   msg:
 *                     type: string
 *                     example: "product added successfully to your wishlist"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: "5f6d5f7c7b1a0a001c8d6c4f"
 *         '400':
 *           description: Invalid product ID or the product does not exist
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
 *                     example: "There is No Product with this ID"
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
 *         '403':
 *           description: Forbidden, insufficient privileges (admin/user required)
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
 *                     example: "You do not have the required permissions to perform this action."
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
 *   /api/v1/wishlist:
 *     get:
 *       summary: Get logged user's wishlist
 *       tags:
 *         - Wishlist
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully retrieved the user's wishlist
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
 *                           example: "5f6d5f7c7b1a0a001c8d6c4f"
 *                         name:
 *                           type: string
 *                           example: "Product Name"
 *                         description:
 *                           type: string
 *                           example: "Product Description"
 *                         price:
 *                           type: number
 *                           example: 29.99
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
 *         '403':
 *           description: Forbidden, insufficient privileges (admin/user required)
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
 *                     example: "You do not have the required permissions to perform this action."
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
 *   /api/v1/wishlist/{productId}:
 *     delete:
 *       summary: Remove product from logged user's wishlist
 *       tags:
 *         - Wishlist
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: productId
 *           required: true
 *           description: The ID of the product to remove from the wishlist
 *           schema:
 *             type: string
 *             example: "60b8d1f2f8d2e5a74c56e0bc"
 *       responses:
 *         '200':
 *           description: Successfully removed product from wishlist
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   msg:
 *                     type: string
 *                     example: "Product removed successfully from your wishlist"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "60b8d1f2f8d2e5a74c56e0bc"
 *                         name:
 *                           type: string
 *                           example: "Product Name"
 *                         description:
 *                           type: string
 *                           example: "Product Description"
 *                         price:
 *                           type: number
 *                           example: 29.99
 *         '400':
 *           description: Invalid MongoDB ID format for productId
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
 *                     example: "Invalid MongoDB ID Format"
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
 *         '403':
 *           description: Forbidden, insufficient privileges (admin/user required)
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
 *                     example: "You do not have the required permissions to perform this action."
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
