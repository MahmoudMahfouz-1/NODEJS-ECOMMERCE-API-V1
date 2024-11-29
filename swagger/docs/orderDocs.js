/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/checkout-session/{cartId}:
 *     get:
 *       summary: Create a checkout session for the cart
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: cartId
 *           required: true
 *           description: The unique identifier of the cart for which the checkout session is created
 *           schema:
 *             type: string
 *           example: "6489f5dfde8ad030c13a1abc"
 *       requestBody:
 *         required: false
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shippingAddress:
 *                   type: string
 *                   description: Shipping address for the order
 *                   example: "123 Main St, Cairo, Egypt"
 *       responses:
 *         '200':
 *           description: Checkout session successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: "SUCCESS"
 *                   session:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "cs_test_a1s2d3f4g5"
 *                       url:
 *                         type: string
 *                         example: "https://checkout.stripe.com/pay/cs_test_a1s2d3f4g5"
 *                       expires_at:
 *                         type: integer
 *                         example: 1692338400
 *         '404':
 *           description: Cart not found with the provided ID
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
 *                     example: "There is No Cart with this ID 6489f5dfde8ad030c13a1abc"
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
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/{cartId}:
 *     post:
 *       summary: Create a new cash order from the cart
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: cartId
 *           required: true
 *           description: The unique identifier of the cart to create an order from
 *           schema:
 *             type: string
 *           example: "6489f5dfde8ad030c13a1abc"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - shippingAddress
 *               properties:
 *                 shippingAddress:
 *                   type: string
 *                   description: Shipping address for the order
 *                   example: "123 Main St, Cairo, Egypt"
 *       responses:
 *         '201':
 *           description: Cash order successfully created
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
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       user:
 *                         type: string
 *                         example: "649c5db1f7c6fe1b48bfa3a6"
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               example: "649c5a4ff7c6fe1b48bfa3a5"
 *                             quantity:
 *                               type: integer
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "Red"
 *                             price:
 *                               type: number
 *                               example: 199.99
 *                       shippingAddress:
 *                         type: string
 *                         example: "123 Main St, Cairo, Egypt"
 *                       taxPrice:
 *                         type: number
 *                         example: 0
 *                       shippingPrice:
 *                         type: number
 *                         example: 0
 *                       totalOrderPrice:
 *                         type: number
 *                         example: 399.98
 *                       paymentMethod:
 *                         type: string
 *                         example: "cash"
 *                       isPaid:
 *                         type: boolean
 *                         example: false
 *                       isDelivered:
 *                         type: boolean
 *                         example: false
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
 *                     example: "No cart found with this ID"
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
 *         '404':
 *           description: Cart not found with the provided ID
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
 *                     example: "There is no cart with this ID"
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
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/:
 *     get:
 *       summary: Get all orders based on user role
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: query
 *           name: page
 *           description: Page number for pagination (default is 1)
 *           schema:
 *             type: integer
 *             example: 1
 *         - in: query
 *           name: limit
 *           description: Number of orders to fetch per page (default is 20)
 *           schema:
 *             type: integer
 *             example: 10
 *         - in: query
 *           name: sort
 *           description: Sort orders by specified fields (e.g., 'createdAt,-totalOrderPrice')
 *           schema:
 *             type: string
 *             example: "createdAt,-totalOrderPrice"
 *         - in: query
 *           name: fields
 *           description: Comma-separated list of fields to include in the response (e.g., 'user,cartItems')
 *           schema:
 *             type: string
 *             example: "user,cartItems"
 *         - in: query
 *           name: searchKeyWord
 *           description: Keyword to search for in orders (e.g., user name or product title)
 *           schema:
 *             type: string
 *             example: "John Doe"
 *       responses:
 *         '200':
 *           description: Successfully retrieved orders
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
 *                         example: null
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "649d8b65e57e3b48f0c2c5f4"
 *                         user:
 *                           type: string
 *                           example: "649c5db1f7c6fe1b48bfa3a6"
 *                         cartItems:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               product:
 *                                 type: string
 *                                 example: "649c5a4ff7c6fe1b48bfa3a5"
 *                               quantity:
 *                                 type: integer
 *                                 example: 2
 *                               color:
 *                                 type: string
 *                                 example: "Red"
 *                               price:
 *                                 type: number
 *                                 example: 199.99
 *                         shippingAddress:
 *                           type: string
 *                           example: "123 Main St, Cairo, Egypt"
 *                         totalOrderPrice:
 *                           type: number
 *                           example: 399.98
 *                         paymentMethod:
 *                           type: string
 *                           example: "cash"
 *                         isPaid:
 *                           type: boolean
 *                           example: false
 *                         isDelivered:
 *                           type: boolean
 *                           example: false
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
 *           description: Forbidden (Admin or User role required)
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
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/{id}/pay:
 *     post:
 *       summary: Update the order status to "paid"
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier of the order to mark as paid
 *           schema:
 *             type: string
 *           example: "649d8b65e57e3b48f0c2c5f4"
 *       responses:
 *         '200':
 *           description: Order successfully updated to paid
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
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       user:
 *                         type: string
 *                         example: "649c5db1f7c6fe1b48bfa3a6"
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               example: "649c5a4ff7c6fe1b48bfa3a5"
 *                             quantity:
 *                               type: integer
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "Red"
 *                             price:
 *                               type: number
 *                               example: 199.99
 *                       shippingAddress:
 *                         type: string
 *                         example: "123 Main St, Cairo, Egypt"
 *                       totalOrderPrice:
 *                         type: number
 *                         example: 399.98
 *                       paymentMethod:
 *                         type: string
 *                         example: "cash"
 *                       isPaid:
 *                         type: boolean
 *                         example: true
 *                       paidAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T14:30:00Z"
 *         '404':
 *           description: No order found with the provided ID
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
 *                     example: "There is No order with this id 649d8b65e57e3b48f0c2c5f4"
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
 *           description: Forbidden (Admin or Manager role required)
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
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/{id}/deliver:
 *     post:
 *       summary: Update the order status to "delivered"
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier of the order to mark as delivered
 *           schema:
 *             type: string
 *           example: "649d8b65e57e3b48f0c2c5f4"
 *       responses:
 *         '200':
 *           description: Order successfully updated to delivered
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
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       user:
 *                         type: string
 *                         example: "649c5db1f7c6fe1b48bfa3a6"
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               example: "649c5a4ff7c6fe1b48bfa3a5"
 *                             quantity:
 *                               type: integer
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "Red"
 *                             price:
 *                               type: number
 *                               example: 199.99
 *                       shippingAddress:
 *                         type: string
 *                         example: "123 Main St, Cairo, Egypt"
 *                       totalOrderPrice:
 *                         type: number
 *                         example: 399.98
 *                       paymentMethod:
 *                         type: string
 *                         example: "cash"
 *                       isPaid:
 *                         type: boolean
 *                         example: true
 *                       paidAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T14:30:00Z"
 *                       isDelivered:
 *                         type: boolean
 *                         example: true
 *                       deliveredAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T16:00:00Z"
 *         '404':
 *           description: No order found with the provided ID
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
 *                     example: "There is No order with this id 649d8b65e57e3b48f0c2c5f4"
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
 *           description: Forbidden (Admin or Manager role required)
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
 * tags:
 *   - name: Orders
 *     description: Operations related to orders and checkout
 *
 * paths:
 *   /api/v1/orders/{id}:
 *     get:
 *       summary: Get a specific order for the logged-in user
 *       tags:
 *         - Orders
 *       security:
 *         - bearerAuth: [] # Ensures the token is required for this endpoint
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The unique identifier of the order to retrieve
 *           schema:
 *             type: string
 *           example: "649d8b65e57e3b48f0c2c5f4"
 *       responses:
 *         '200':
 *           description: Successfully retrieved the order
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
 *                         example: "649d8b65e57e3b48f0c2c5f4"
 *                       user:
 *                         type: string
 *                         example: "649c5db1f7c6fe1b48bfa3a6"
 *                       cartItems:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             product:
 *                               type: string
 *                               example: "649c5a4ff7c6fe1b48bfa3a5"
 *                             quantity:
 *                               type: integer
 *                               example: 2
 *                             color:
 *                               type: string
 *                               example: "Red"
 *                             price:
 *                               type: number
 *                               example: 199.99
 *                       shippingAddress:
 *                         type: string
 *                         example: "123 Main St, Cairo, Egypt"
 *                       totalOrderPrice:
 *                         type: number
 *                         example: 399.98
 *                       paymentMethod:
 *                         type: string
 *                         example: "cash"
 *                       isPaid:
 *                         type: boolean
 *                         example: true
 *                       paidAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-29T14:30:00Z"
 *                       isDelivered:
 *                         type: boolean
 *                         example: false
 *                       deliveredAt:
 *                         type: string
 *                         format: date-time
 *                         example: "null"
 *         '404':
 *           description: No order found with the provided ID
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
 *                     example: "There is No order with this id 649d8b65e57e3b48f0c2c5f4"
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
 *           description: Forbidden (Admin or User role required)
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
