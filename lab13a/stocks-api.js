// first reference required modules
const fs = require('fs');
const path = require('path');
const express = require('express');

// for now, we will get our data by reading the provided json file
const jsonPath = path.join(__dirname, 'public', 'stocks-complete.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
// convert string data into JSON object
const stocks = JSON.parse(jsonData);

// create an express app
const app = express();

// return all the stocks when a root request arrives
app.get('/', (req,resp) => { resp.json(stocks) } );
 
// return just the requested stock
app.get('/stock/:symbol', (req,resp) => {
     // change user supplied symbol to upper case
    const symbolToFind = req.params.symbol.toUpperCase();
    // search the array of objects for a match
    const matches = stocks.filter(obj => symbolToFind === obj.symbol);
    // return the matching stock
    resp.json(matches); 
});

// return all the stocks whose name contains the supplied text
app.get('/stock/name/:substring', (req,resp) => {
    // change user supplied substring to lower case
    const substring = req.params.substring.toLowerCase();
    // search the array of objects for a match
    const matches = stocks.filter( (obj) => obj.name.toLowerCase().includes(substring) );
    // return the matching stocks
    resp.json(matches); 
});

// Use express to listen to port
let port = 8080; app.listen(port, () => {
console.log("Server running at port= " + port); });