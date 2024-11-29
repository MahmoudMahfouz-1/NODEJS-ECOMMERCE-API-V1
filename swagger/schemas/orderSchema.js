/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the order
 *           example: "638f2b1c2a0f7c9123456789"
 *         user:
 *           type: string
 *           description: The ID of the user who placed the order
 *           example: "638f2b1c2a0f7c9123456789"
 *         cartItems:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: ID of the product
 *                 example: "638f2b1c2a0f7c9123456789"
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product in the order
 *                 example: 2
 *               color:
 *                 type: string
 *                 description: Color of the product
 *                 example: "red"
 *               price:
 *                 type: number
 *                 description: Price of a single unit of the product
 *                 example: 29.99
 *         taxPrice:
 *           type: number
 *           description: Tax applied to the order
 *           example: 5.00
 *         shippingAddress:
 *           type: string
 *           description: Address where the order will be shipped
 *           example: "123 Main St, Springfield, IL"
 *         shippingPrice:
 *           type: number
 *           description: Cost of shipping
 *           example: 10.00
 *         totalOrderPrice:
 *           type: number
 *           description: Total price of the order including tax and shipping
 *           example: 100.00
 *         paymentMethod:
 *           type: string
 *           description: Payment method used for the order
 *           enum: [card, cash]
 *           example: "cash"
 *         isPaid:
 *           type: boolean
 *           description: Indicates if the order has been paid
 *           example: true
 *         paidAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was paid
 *           example: "2023-11-28T15:00:12.123Z"
 *         isDelivered:
 *           type: boolean
 *           description: Indicates if the order has been delivered
 *           example: false
 *         deliveredAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was delivered
 *           example: "2023-11-30T10:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the order was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update to the order
 *           example: "2023-11-28T15:00:12.123Z"
 */
