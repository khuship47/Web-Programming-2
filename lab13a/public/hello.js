//console.log('hello world')

// Configure HTTP server to respond with simple message to all requests
const http = require('http');
const server = http.createServer(function (request, response){
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Hello to our first node,js application \n");
    response.end();
});

// Listen on port 8080 on localhost
const port = 8080; 
server.listen(port);

// display a message on the terminal
console.log("Server running at port=" + port);