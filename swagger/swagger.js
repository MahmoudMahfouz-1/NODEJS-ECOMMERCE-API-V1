const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Path to the API specs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Shop',
      version: '1.0.0',
      description: 'API documentation for the E-Shop application',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Specifies that JWT token is used
        },
      },
    },
    tags: [
      { name: 'Auth', description: 'Authentication-related operations' }, // Auth first
      { name: 'Logged-User', description: 'Logged-User-related operations' },
      { name: 'Products', description: 'Operations related to products' },
      { name: 'Brands', description: 'Operations related to brand management' },
      {
        name: 'Cart',
        description: "Operations related to the user's shopping cart",
      },
      {
        name: 'Orders',
        description: 'Operations related to Orders and Card Payment',
      },

      // Add more tags here as needed
    ],
  },
  servers: [
    {
      url: 'http://localhost:8000/api/v1', // Base URL for your API
      description: 'Local API server for development',
    },
    {
      url: 'https://nodejs-ecommerce-api-v1-production.up.railway.app', // Base URL for your API
      description: 'Global API Server for production',
    },
  ],
  apis: [
    path.join(__dirname, '/schemas/*Schema.js'),
    path.join(__dirname, '/docs/*Docs.js'), // You can add your route files here to auto-generate docs
  ],
};

// Initialize swagger-jsdoc
const specs = swaggerJsdoc(options);

const swaggerSetup = (app) => {
  // Setup Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerSetup;
