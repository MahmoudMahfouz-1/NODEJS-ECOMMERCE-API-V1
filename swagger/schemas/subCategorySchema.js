/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the subcategory
 *           example: "638f2b1c2a0f7c9123456789"
 *         name:
 *           type: string
 *           description: Name of the subcategory
 *           example: "Mobile Phones"
 *         slug:
 *           type: string
 *           description: URL-friendly version of the subcategory name
 *           example: "mobile-phones"
 *         category:
 *           type: string
 *           description: ID of the parent category this subcategory belongs to
 *           example: "638f2b1c2a0f7c9123456787"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subcategory was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subcategory was last updated
 *           example: "2023-11-28T15:00:12.123Z"
 *       required:
 *         - name
 *         - category
 */
