/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the review
 *           example: "638f2b1c2a0f7c9123456789"
 *         title:
 *           type: string
 *           description: Title or summary of the review
 *           example: "Excellent product!"
 *         ratings:
 *           type: number
 *           description: Rating score provided by the user
 *           minimum: 0
 *           maximum: 5
 *           example: 4.5
 *         user:
 *           type: string
 *           description: ID of the user who submitted the review
 *           example: "638f2b1c2a0f7c9123456788"
 *         product:
 *           type: string
 *           description: ID of the product being reviewed
 *           example: "638f2b1c2a0f7c9123456787"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the review was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the review was last updated
 *           example: "2023-11-28T15:00:12.123Z"
 *       required:
 *         - ratings
 *         - user
 *         - product
 */
