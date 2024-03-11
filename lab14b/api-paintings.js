// Create express app
const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// root endpoint will retrieve all paintings


// this endpoint will retrieve single painting



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});