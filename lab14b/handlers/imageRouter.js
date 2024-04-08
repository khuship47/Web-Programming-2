const { model } = require("mongoose");

// handle GET requests for [domain]/api/images - return all images
const handleAllImages = (app, Image) => {
    app.get('/api/images', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
        Image.find()
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to travel-images" });
        });
    });
};


// handle requests for specific image: e.g., /api/images/1
const handleSingleImage = (app, Image) => {
    app.get('/api/images/:id', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
        Image.find({'id': req.params.id})
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to travel-images" });
        });
    });
};

// handle requests for images from specific city
const handleImageCity = (app, Image) => {
    app.get('/api/images/city/:city', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
        Image.find({'location.city': new RegExp(req.params.city, 'i')})
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to travel-images" });
        });
    });
};

// handle requests for images from specific Country
const handleImageCountry = (app, Image) => {
    app.get('/api/images/country/:country', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
        Image.find({'location.country': new RegExp(req.params.country, 'i')})
        .then((data) => {
            resp.json(data);
        })
        .catch((err) => {
            resp.json({ message: "Unable to connect to travel-images" });
        });
    });
};


module.exports = {
    handleAllImages,
    handleSingleImage,
    handleImageCity,
    handleImageCountry
};
