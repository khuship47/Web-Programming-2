const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))

// serves up static files from the public folder. 
app.use(express.static('public'));
// also add a path to static 
app.use('/static', express.static('public'));

// add the cookie parser middleware here

// now handle post request from form

const port = process.env.port || 8080;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});
