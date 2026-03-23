const express = require('express');
const bodyParser = require('body-parser');
const { swaggerUi, specs } = require('./Swagger');
const articlesRoutes = require('./Routes'); 

const app = express(); 
app.use(bodyParser.json());

// Routes
app.use(articlesRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Blog !');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
