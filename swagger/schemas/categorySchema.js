/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the category
 *           example: "638f2b1c2a0f7c9123456789"
 *         name:
 *           type: string
 *           description: The name of the category
 *           example: "Electronics"
 *         slug:
 *           type: string
 *           description: URL-friendly version of the category name
 *           example: "electronics"
 *         image:
 *           type: string
 *           description: Full URL to the category's image
 *           example: "http://localhost:3000/uploads/category/electronics.jpg"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the category was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update to the category
 *           example: "2023-11-28T15:00:12.123Z"
 */
