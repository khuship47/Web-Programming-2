const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id : Number,
    title : String,
    description : String,
    location:{
       iso : String,
       country : String,
       city : String,
       cityCode : Number,
       continent : String,
       latitude : Number,
       longitude : Number
    },
    user:{
       userid : Number,
       firstname : String,
       lastname : String,
    },
    filename: String
});

module.exports = mongoose.model('Image', imageSchema, 'images');