const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
    id: Number,
    details: {
        firstname: String,
        lastname: String,
        city: String,
        country: String 
    },
    picture: {
        large: String,
        thumbnail: String
    },
    membership: {
        date_joined: String,
        last_update: String,
        likes: Number
    },
    email: String,
    password: String,
    apikey: String
});
// We'll use this later on to check if user has the correct credentials.
// Can't be arrow syntax because need 'this' within it
userSchema.methods.isValidPassword = async function(formPassword) {
    const user = this;
    const hash = user.password;
    // Hashes the password sent by the user for login and checks if the
    // digest stored in the database matches the one sent. Returns true
    // if it does else false.
    const compare = await bcrypt.compare(formPassword, hash);
    return compare;
}
    
module.exports = mongoose.model('User', userSchema, 'users');