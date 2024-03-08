/* Module for handling specific requests/routes for stock data  */

// return all the stocks when a root request arrives
const handleAllStocks = (stocks, app) => { 
    app.get('/', (req,resp) => { resp.json(stocks) } );
};

// return just the requested stock
const handleSingleSymbol = (stocks, app) => { 
    app.get('/stock/:symbol', (req,resp) => {
        // change user supplied symbol to upper case
       const symbolToFind = req.params.symbol.toUpperCase();
       // search the array of objects for a match
       const matches = stocks.filter(obj => symbolToFind === obj.symbol);
       // return the matching stock
       resp.json(matches); 
   });
};

// return all the stocks whose name contains the supplied text
const handleNameSearch = (stocks, app) => {
    app.get('/stock/name/:substring', (req,resp) => {
        // change user supplied substring to lower case
        const substring = req.params.substring.toLowerCase();
        // search the array of objects for a match
        const matches = stocks.filter( (obj) => obj.name.toLowerCase().includes(substring) );
        // return the matching stocks
        resp.json(matches); 
    });
};

module.exports = { handleAllStocks,
handleSingleSymbol,
handleNameSearch };