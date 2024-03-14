require('dotenv').config();
const express = require('express');
const app = express();
const Book = require('./models/Book');

// create connection to database
require('./handlers/dataConnector.js').connect();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});