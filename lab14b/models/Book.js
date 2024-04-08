const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const bookSchema = new mongoose.Schema({
    id: Number,
    isbn10: String,
    isbn13: String,
    title: String,
    year: Number,
    publisher: String,
    production: {
        status: String,
        binding: String,
        size: String,
        pages: Number,
        instock: Date
    },
    category: {
        main: String,
        secondary: String
    }
});

module.exports = mongoose.model('Book', bookSchema, 'books');