/**
 * @swagger
 * components:
 *   schemas:
 *     Brand:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the brand
 *           example: "638f2b1c2a0f7c9123456789"
 *         name:
 *           type: string
 *           description: The name of the brand
 *           example: "Nike"
 *         slug:
 *           type: string
 *           description: URL-friendly version of the brand name
 *           example: "nike"
 *         image:
 *           type: string
 *           description: Full URL to the brand's image
 *           example: "http://localhost:3000/uploads/brands/nike-logo.png"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the brand was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update to the brand
 *           example: "2023-11-28T15:00:12.123Z"
 */
