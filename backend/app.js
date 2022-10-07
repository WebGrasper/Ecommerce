const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');


app.use(express.json());
app.use(cookieParser());

//Importing Routes
const product = require('./routes/productroute');
const user = require('./routes/userRoutes');

//Middleware for error Handling

app.use(errorHandler);

app.use('/api/v1',product);
app.use('/api/v1',user);

module.exports = app;