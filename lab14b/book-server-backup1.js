const mongoose = require('mongoose');
const opt = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

console.log("starting to connect to mongo ...");
mongoose.connect(process.env.MONGO_URL, opt);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', () => {
    console.log("connected to mongo");
});