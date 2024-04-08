require('dotenv').config();
const express = require('express');
const app = express();

const Image = require('./models/Image.js');

// tell node to use json and HTTP header features in body-parser
app.use(express.urlencoded({extended: true}));

// use the route handlers
const imageRouter = require('./handlers/imageRouter.js');
imageRouter.handleAllImages(app, Image);
imageRouter.handleSingleImage(app, Image);
imageRouter.handleImageCity(app, Image);
imageRouter.handleImageCountry(app, Image);

// create connection to database
require('./handlers/dataConnector.js').connect();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});