/* Module for handling specific requests/routes for stock data  */

const stockController = require('./stockController.js');

// return daily price data
const handlePriceData = (stocks, app) => { 
    app.get('/stock/daily/:symbol', (req,resp) => {
        stockController.findPrices(stocks,req,resp);
    }); 
}

// return all the stocks when a root request arrives
const handleAllStocks = (stocks, app) => { 
    app.get('/', (req,resp) => { resp.json(stocks) } );
};

// return just the requested stock
const handleSingleSymbol = (stocks, app) => { 
    app.route('/stock/:symbol').get( (req,resp) => {
        stockController.findSymbol(stocks,req,resp);
    })
    // if it is a PUT request then update specified stock
    .put( (req,resp) => {
        stockController.updateSymbol(stocks,req,resp);
    });
};

// return all the stocks whose name contains the supplied text
const handleNameSearch = (stocks, app) => {
    app.get('/stock/name/:substring', (req,resp) => {
        stockController.findName(stocks,req,resp);
    });
};

module.exports = { 
    handleAllStocks,
    handleSingleSymbol,
    handleNameSearch,
    handlePriceData
};