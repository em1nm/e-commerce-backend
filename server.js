const express = require('express');
const routes = require('./routes');
// import sequelize 
const Sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to database, turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});