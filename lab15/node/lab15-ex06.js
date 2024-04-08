const express = require('express');
const app = express();
app.use(express.json());

// serves up static files from the public folder. 
app.use(express.static('public'));
// also add a path to static 
app.use('/static', express.static('public'));

// add the session middleware here
const session = require('express-session');
app.use(session({
    secret: 'could be anything',
    resave: false,
    saveUninitialized: true
    // in a production https environment, you would also add
    // cookie: { secure: true, httpOnly: true }
}));

// now handle post request from form
app.post('/addToFavorites', (req,res) => {
    // check if we have a favorites array for this session
    if (req.session.favorites) {
        const favorites = req.session.favorites;
        favorites.push({id: req.body.id, title: req.body.title});
        req.session.favorites = favorites;
    } else {
        req.session.favorites = [
        {id: req.body.id, title: req.body.title} ];
    }
    res.json({
        message: "POST request was successful",
        count: req.session.favorites.length,
        received: {id: req.body.id, title: req.body.title}})
});

// add view favorites handler here
app.get("/listFavorites", (req, res) => {
    if (req.session.favorites) {
        const favorites = req.session.favorites;
        res.json(favorites);
    } else {
        res.json([]);
    }
});

const port = process.env.port || 8080;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});
