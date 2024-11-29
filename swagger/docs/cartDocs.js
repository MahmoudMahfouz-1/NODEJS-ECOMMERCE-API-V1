/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart:
 *     post:
 *       summary: Adds a product to the logged user's cart
 *       tags:
 *         - Cart
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       requestBody:
 *         description: Adds a product to the cart for the logged-in user
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: string
 *                   description: The ID of the product to be added
 *                   example: "507f1f77bcf86cd799439011"
 *                 color:
 *                   type: string
 *                   description: The color of the product to be added
 *                   example: "red"
 *       responses:
 *         '200':
 *           description: Successfully added product to the cart or updated quantity if already in cart
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
 *                     description: The updated cart data
 *                     properties:
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: object
 *                               description: Product details
 *                               properties:
 *                                 title:
 *                                   type: string
 *                                   description: Product title
 *                                   example: "Red Shirt"
 *                             quantity:
 *                               type: number
 *                               description: Quantity of the product in the cart
 *                               example: 1
 *                             color:
 *                               type: string
 *                               description: Selected color of the product
 *                               example: "red"
 *                             price:
 *                               type: number
 *                               description: Price of the product
 *                               example: 50
 *                       totalCartPrice:
 *                         type: number
 *                         description: Total price of all items in the cart
 *                         example: 150
 *         '400':
 *           description: Bad request, invalid product data
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
 *                     example: "Invalid product ID or missing required fields"
 *         '401':
 *           description: Unauthorized access, token missing or invalid
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
 *         '404':
 *           description: Product not found or cart not found for the logged-in user
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
 *                     example: "Product not found or no cart for this user"
 *         '500':
 *           description: Internal server error, failure to add the product to the cart
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
 *                     example: "There was an error adding the product to the cart"
 */

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart:
 *     get:
 *       summary: Retrieves the logged user's cart data, including items and their details
 *       tags:
 *         - Cart
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       responses:
 *         '200':
 *           description: Successfully retrieved the user's cart data
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   numberOfItems:
 *                     type: number
 *                     description: Total number of items in the cart
 *                     example: 3
 *                   data:
 *                     type: object
 *                     description: The cart details
 *                     properties:
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: object
 *                               description: Product details
 *                               properties:
 *                                 title:
 *                                   type: string
 *                                   description: Product title
 *                                   example: "Red Shirt"
 *                             quantity:
 *                               type: number
 *                               description: Quantity of the product in the cart
 *                               example: 1
 *                             color:
 *                               type: string
 *                               description: Selected color of the product
 *                               example: "red"
 *                             price:
 *                               type: number
 *                               description: Price of the product
 *                               example: 50
 *                       totalCartPrice:
 *                         type: number
 *                         description: Total price of all items in the cart
 *                         example: 150
 *         '404':
 *           description: Cart not found for the logged-in user
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
 *                     example: "There is no cart for this user id."
 *         '401':
 *           description: Unauthorized access, token missing or invalid
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
 */

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart/{itemId}:
 *     delete:
 *       summary: Removes a product from the logged user's cart
 *       tags:
 *         - Cart
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       parameters:
 *         - in: path
 *           name: itemId
 *           required: true
 *           description: The ID of the cart item to remove
 *           schema:
 *             type: string
 *             example: "60c72b2f5b4b3d2b24a1e3e9"
 *       responses:
 *         '200':
 *           description: Successfully removed the product from the cart
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   numberOfItems:
 *                     type: number
 *                     description: The number of items left in the cart
 *                     example: 2
 *                   data:
 *                     type: object
 *                     description: The updated cart data
 *                     properties:
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: object
 *                               description: Product details
 *                               properties:
 *                                 title:
 *                                   type: string
 *                                   description: Product title
 *                                   example: "Blue Jacket"
 *                             quantity:
 *                               type: number
 *                               description: Quantity of the product in the cart
 *                               example: 1
 *                             color:
 *                               type: string
 *                               description: Selected color of the product
 *                               example: "blue"
 *                             price:
 *                               type: number
 *                               description: Price of the product
 *                               example: 75
 *                       totalCartPrice:
 *                         type: number
 *                         description: Total price of all items left in the cart
 *                         example: 150
 *         '400':
 *           description: Bad request, invalid item ID or data
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
 *                     example: "Invalid cart item ID"
 *         '401':
 *           description: Unauthorized access, token missing or invalid
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
 *         '404':
 *           description: Cart not found for the logged-in user or item does not exist
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
 *                     example: "Cart not found or item not in cart"
 *         '500':
 *           description: Internal server error, failure to remove the cart item
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
 *                     example: "There was an error removing the cart item"
 */

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart:
 *     delete:
 *       summary: Clears the logged user's entire shopping cart
 *       tags:
 *         - Cart
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       responses:
 *         '204':
 *           description: Successfully cleared the user's cart
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
 *                     example: "Your cart has been successfully cleared"
 *         '400':
 *           description: Bad request, unable to clear the cart due to invalid data
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
 *                     example: "Unable to clear the cart"
 *         '401':
 *           description: Unauthorized access, token missing or invalid
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
 *         '404':
 *           description: Cart not found for the logged-in user
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
 *                     example: "Cart not found"
 *         '500':
 *           description: Internal server error, failure to clear the cart
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
 *                     example: "There was an error clearing the cart"
 */

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart/{itemId}:
 *     put:
 *       summary: Updates the quantity of a specific product in the logged user's cart
 *       tags:
 *         - Cart
 *       parameters:
 *         - in: path
 *           name: itemId
 *           required: true
 *           description: The ID of the cart item to update
 *           schema:
 *             type: string
 *             example: "605c72ef153207001f9dace"
 *       requestBody:
 *         description: The new quantity for the cart item
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 quantity:
 *                   type: number
 *                   description: The new quantity of the item
 *                   example: 2
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       responses:
 *         '200':
 *           description: Successfully updated the quantity of the item in the cart
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   numberOfItems:
 *                     type: number
 *                     example: 3
 *                   data:
 *                     type: object
 *                     properties:
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               description: Product ID
 *                               example: "605c72ef153207001f9dace"
 *                             quantity:
 *                               type: number
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "red"
 *                             price:
 *                               type: number
 *                               example: 25
 *         '400':
 *           description: Invalid quantity or bad request
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
 *                     example: "Invalid quantity provided"
 *         '404':
 *           description: Cart or item not found
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
 *                     example: "Item not found in the cart"
 *         '500':
 *           description: Internal server error, failure to update cart item
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
 *                     example: "There was an error updating the cart item"
 */

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Operations related to the user's shopping cart
 *
 * paths:
 *   /api/v1/cart/applyCoupon:
 *     put:
 *       summary: Apply a coupon to the logged user's cart
 *       tags:
 *         - Cart
 *       requestBody:
 *         description: The coupon code to apply to the cart
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 coupon:
 *                   type: string
 *                   description: The coupon code to apply
 *                   example: "SUMMER20"
 *       security:
 *         - BearerAuth: []  # Ensure that the route requires authentication
 *       responses:
 *         '200':
 *           description: Successfully applied the coupon and updated the cart total price
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   numberOfItems:
 *                     type: number
 *                     example: 3
 *                   data:
 *                     type: object
 *                     properties:
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               description: Product ID
 *                               example: "605c72ef153207001f9dace"
 *                             quantity:
 *                               type: number
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "red"
 *                             price:
 *                               type: number
 *                               example: 25
 *                       totalPriceAfterDiscount:
 *                         type: string
 *                         example: "40.00"
 *         '400':
 *           description: Invalid coupon or bad request
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
 *                     example: "Coupon is either invalid or expired"
 *         '404':
 *           description: Cart not found or coupon expired
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
 *                     example: "Cart not found or coupon expired"
 *         '500':
 *           description: Internal server error, failure to apply coupon
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
 *                     example: "There was an error applying the coupon"
 */
