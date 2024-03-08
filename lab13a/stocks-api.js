// first reference required modules
const path = require('path');
const express = require('express');

// create an express app
const app = express();

app.use(express.urlencoded({ extended: true }));

// handle requests for static resources
app.use('/static', express.static(path.join(__dirname,'public')));

// map client request for socket.io file
app.use('/socket.io', express.static(path.join(__dirname, 
    '/node_modules/socket.io/client-dist/')));

// reference our own modules
const stocks = require('./scripts/data-provider.js');
const stockRouter = require('./scripts/stock-router.js'); 


// handle other requests for stocks
stockRouter.handleSingleSymbol(stocks, app); 
stockRouter.handleNameSearch(stocks, app);
stockRouter.handlePriceData(stocks, app);

// Use express to listen to port
let port = 8080; app.listen(port, () => {
console.log("Server running at port= " + port); });

// listen for socket communication on port 3000
const io = require('socket.io')(3000, { 
    cors: {
        origin: ['http://localhost:8080'] 
    }
});

io.on('connection', socket => {
    console.log('new connection made with client');
    // client has sent a new user has joined message
    socket.on('username', msg => { 
        console.log('username: ' + msg);
        // attach passed username with this communication socket
        socket.username = msg;
        // broadcast message to all connected clients
        const obj = { message: "Has joined", user: msg };
        socket.broadcast.emit('user joined', obj); 
    });

     // client has sent a chat message ... broadcast it
    socket.on('chat from client', msg => {
        console.log('message received from ' + socket.username); 
        io.emit('chat from server', { user: socket.username, message: msg } );
    });
});  