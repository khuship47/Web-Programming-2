/* Module for handling specific api requests/routes for book data  */  
const helper = require('./helpers.js');


const handleAllBooks = (app, controller) => {
    app.get('/api/all', helper.ensureAuthenticated, (req,resp) => {         
      const data = controller.getAll();
      resp.json(data); 
   } );
};

// return just the requested book
const handleISBN10 = (app, controller) => {
   app.get('/api/isbn10/:isbn10', helper.ensureAuthenticated, (req,resp) => {
      const data = controller.findByISBN10(req.params.isbn10);
      if (data) {
         resp.json(data);
      } else {
         resp.json(jsonMessage(`ISBN ${req.params.isbn10} not found`));
      }  
   });
};

const handleTitle = (app, controller) => {
   app.get('/api/title/:substring', helper.ensureAuthenticated, (req,resp) => {
      const data = controller.findByTitle(req.params.substring);
      if (data) {
         resp.json(data);
      } else {
         resp.json(jsonMessage(`No title matches found for ${substring}`));
      }          
   });
};

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
   return { message : msg };
};


module.exports = {
   handleAllBooks, handleISBN10, handleTitle
};
