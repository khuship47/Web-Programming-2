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

module.exports = {
    handleAllBooks,
    handleSingleBook,
    handleBooksByPageRange
};