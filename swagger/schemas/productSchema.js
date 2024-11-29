/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the product
 *           example: "638f2b1c2a0f7c9123456789"
 *         title:
 *           type: string
 *           description: Title of the product
 *           example: "Wireless Headphones"
 *         slug:
 *           type: string
 *           description: URL-friendly version of the product title
 *           example: "wireless-headphones"
 *         description:
 *           type: string
 *           description: Detailed description of the product
 *           example: "High-quality wireless headphones with noise-canceling feature."
 *         quantity:
 *           type: integer
 *           description: Number of items available in stock
 *           example: 100
 *         sold:
 *           type: integer
 *           description: Number of items sold
 *           example: 20
 *         price:
 *           type: number
 *           description: Price of the product
 *           example: 150.00
 *         priceAfterDiscount:
 *           type: number
 *           description: Discounted price of the product, if applicable
 *           example: 120.00
 *         colors:
 *           type: array
 *           items:
 *             type: string
 *           description: Available colors for the product
 *           example: ["black", "white", "blue"]
 *         imageCover:
 *           type: string
 *           description: URL of the product's cover image
 *           example: "https://example.com/uploads/products/cover.jpg"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs of additional product images
 *           example: [
 *             "https://example.com/uploads/products/image1.jpg",
 *             "https://example.com/uploads/products/image2.jpg"
 *           ]
 *         category:
 *           type: string
 *           description: ID of the category to which the product belongs
 *           example: "638f2b1c2a0f7c9123456789"
 *         subcategory:
 *           type: string
 *           description: ID of the subcategory to which the product belongs
 *           example: "638f2b1c2a0f7c9123456790"
 *         brand:
 *           type: string
 *           description: ID of the brand associated with the product
 *           example: "638f2b1c2a0f7c9123456791"
 *         ratings:
 *           type: number
 *           description: Average rating of the product
 *           example: 4.5
 *         ratingsAverage:
 *           type: number
 *           description: Average rating of the product
 *           example: 4.3
 *         ratingsQuantity:
 *           type: integer
 *           description: Total number of ratings the product has received
 *           example: 10
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was created
 *           example: "2023-11-28T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was last updated
 *           example: "2023-11-28T15:00:12.123Z"
 *       required:
 *         - title
 *         - description
 *         - quantity
 *         - price
 *         - imageCover
 *         - category
 */
