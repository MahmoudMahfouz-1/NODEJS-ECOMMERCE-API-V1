/**
 * @swagger
 * components:
 *   schemas:
 *     Coupon:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the coupon
 *           example: "638f2b1c2a0f7c9123456789"
 *         name:
 *           type: string
 *           description: The name of the coupon
 *           example: "SUMMER2024"
 *         expire:
 *           type: string
 *           format: date-time
 *           description: The expiration date and time of the coupon
 *           example: "2024-12-31T23:59:59.000Z"
 *         discount:
 *           type: number
 *           description: Discount percentage or value offered by the coupon
 *           example: 20
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the coupon was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update to the coupon
 *           example: "2023-11-28T15:00:12.123Z"
 */
