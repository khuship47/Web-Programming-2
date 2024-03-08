// first reference required modules
const path = require('path');
const express = require('express');

// create an express app
const app = express();

app.use(express.urlencoded({ extended: true }));

// handle requests for static resources
app.use('/static', express.static(path.join(__dirname,'public')));

// reference our own modules
const stocks = require('./scripts/data-provider.js');
const stockRouter = require('./scripts/stock-router.js'); 


// handle other requests for stocks
stockRouter.handleSingleSymbol(stocks, app); 
stockRouter.handleNameSearch(stocks, app);
stockRouter.handlePriceData(stocks, app);

// Use express to listen to port
let port = 8080; app.listen(port, () => {
console.log("Server running at port= " + port); });