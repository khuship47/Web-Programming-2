// Create express app
const express = require("express");
const app = express();
const provider = require('./scripts/painting-provider.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// root endpoint will retrieve all paintings
app.get("/", (req, resp) => {
    provider.retrievePaintings(req, resp);
});

// this endpoint will retrieve single painting
app.get("/:id", (req, resp) => {
    provider.retrieveSinglePainting(req, resp);
});


// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});