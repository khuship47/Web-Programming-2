
const path = require('path');
const express = require('express');


// create an express app
const app = express();

/* --- middleware section --- */ 




// serves up static files from the public folder. 
app.use('/static', express.static(path.join(__dirname,'public')));

// tell node to use json and HTTP header features
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// controls book data access
const controller = require('./scripts/bookDataController.js');

// use the api route handlers
const apiRouter = require('./scripts/api-router.js');
apiRouter.handleAllBooks(app, controller);
apiRouter.handleISBN10(app, controller);
apiRouter.handleTitle(app, controller);

/*--- add in site page requests ----*/



// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.port || 8080;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});
