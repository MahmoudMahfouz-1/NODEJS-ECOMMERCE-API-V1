/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the cart
 *           example: "638f2b1c2a0f7c9123456789"
 *         cartItems:
 *           type: array
 *           description: List of items in the cart
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: The unique identifier of the product
 *                 example: "638f2b1c2a0f7c9123456788"
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product in the cart
 *                 example: 2
 *               color:
 *                 type: string
 *                 description: Selected color of the product
 *                 example: "Red"
 *               price:
 *                 type: number
 *                 description: Price of the product at the time of adding to cart
 *                 example: 49.99
 *         totalCartPrice:
 *           type: number
 *           description: The total price of all items in the cart
 *           example: 149.97
 *         totalPriceAfterDiscount:
 *           type: number
 *           description: The total price after applying discounts, if any
 *           example: 129.97
 *         user:
 *           type: string
 *           description: The unique identifier of the user who owns the cart
 *           example: "638f2b1c2a0f7c9123456787"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the cart was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update to the cart
 *           example: "2023-11-28T15:00:12.123Z"
 */
