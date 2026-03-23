const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API pour gérer des articles de blog (INF222)"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./Routes.js"], // Swagger va lire les routes
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
