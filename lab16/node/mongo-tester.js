
require('dotenv').config();
const express = require('express');

const connector = require('./scripts/mongoDataConnector.js').connect();;

// create an express app
const app = express();

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server now running at port= " + port);
});