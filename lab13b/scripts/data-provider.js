const path = require("path");
const fs = require("fs");

// for now, we will get our data by reading the provided json file
const jsonPath = path.join(__dirname, '../data', 
                              'books.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
// convert string data into JSON object
const books = JSON.parse(jsonData);


module.exports =  books ;

