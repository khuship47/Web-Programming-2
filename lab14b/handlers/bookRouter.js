// handle GET requests for [domain]/api/books - return all books
const handleAllBooks = (app, Book) => {
    app.get('/api/books', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
        Book.find()
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to books" });
        });
    });
};

// handle requests for specific book: e.g., /api/books/0321886518
const handleSingleBook = (app, Book) => {
    app.get("/api/books/:isbn", (req, resp) => {
        Book.find({ isbn10: req.params.isbn })
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to books" });
        });
    });
};

// handle requests for books with specific page ranges:
// e.g., [domain]/api/books/pages/500/600
const handleBooksByPageRange = (app, Book) => {
    app.get("/api/books/pages/:min/:max", (req, resp) => {
        Book.find()
        .where("production.pages")
        .gt(req.params.min)
        .lt(req.params.max)
        .sort({ title: 1 })
        .select("title isbn10")
        .exec()
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to books" });
        });
    });
};

// handle POST request for a new book
const handleCreateBook = (app, Book) => {
    app.route('/api/create/book')
    .post( (req,resp) => {
    // retrieve the form data from the http request
    const aBook = {
    isbn10: req.body.isbn10,
    isbn13: req.body.isbn13,
    title: req.body.title,
    year: req.body.year,
    publisher: req.body.publisher,
    production: {
    pages: req.body.pages
    }
    };
    // now have mongoose add the book data
        Book.create(aBook, (err, data) => {
        // for now simply return a JSON message
        if (err) {
        resp.json({ message: 'Unable to connect to books' });
        } else {
        const msg = `New Book was saved
        isbn=${aBook.isbn10}`;
        resp.json({ message: msg });
        }
        });
    });
};
module.exports = {
    handleAllBooks,
    handleSingleBook,
    handleBooksByPageRange,
    handleCreateBook
};