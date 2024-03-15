require('dotenv').config();
const express = require('express');
const app = express();
const Book = require('./models/Book');

// tell node to use json and HTTP header features in body-parser
app.use(express.urlencoded({extended: true}));
// use the route handlers
const bookRouter = require('./handlers/bookRouter.js');
bookRouter.handleAllBooks(app, Book);
bookRouter.handleSingleBook(app, Book);
bookRouter.handleBooksByPageRange(app, Book);

// create connection to database
require('./handlers/dataConnector.js').connect();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});