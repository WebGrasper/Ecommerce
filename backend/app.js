const express = require('express');
const app = express();

//Importing Routes
const product = require('./routes/productroute');

app.use('/api/v1',product);

module.exports = app;