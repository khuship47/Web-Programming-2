
const booksData = require('./data-provider.js');


// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
   return { message : msg };
};

const getAll = () => {
   return booksData; 
};

const findByISBN10 = (isbn10) => {
   // search the array of objects for a match
   return booksData.find(obj => isbn10 === obj.isbn10);
};


const findByTitle = (substring) => {
   // change user supplied substring to lower case
   const lowercase = substring.toLowerCase();
   // search the array of objects for a match 
   return booksData.filter( (obj) => 
         obj.title.toLowerCase().includes(lowercase) );
 
};

module.exports = {
   getAll, findByISBN10, findByTitle
};
