require('dotenv').config();
const express = require('express');
const app = express();
const connector = require('./scripts/mongoDataConnector.js').connect();
const UserModel = require('./scripts/User.js');

app.get("/", (req, resp) => {
    UserModel.findOne({email: "zpochet2@apple.com" })
    .then(data => {
        console.log('-- User found ---');
        resp.json(data);
    })
    .catch(err => {
        console.log('user not found');
    });
});
    
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});