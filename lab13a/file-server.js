/* These additional modules allow us to process URL
   paths as well as read/write files; we will use these later */
const http = require("http"); 
const url = require("url"); 
const path = require("path"); 
const fs = require("fs");

// begin by creating a HTTP server
const server = http.createServer(function (request, response) {
    // local folder path in front of the filename
    const filename = "public/venice.jpg";
    // read the file
    fs.readFile(filename, (err, file) => {
       // remember this is in callback function; it only gets
       // invoked once the file has been read in
        if (err) {
            response.writeHead(500, {"Content-Type": "text/html"}); 
            response.write("<h1>500 Error - File not found</h1>\n"); 
        } 
        else {
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(file); 
        }
        response.end(); 
    });
});

// Listen on port on localhost
let port = 8080;
server.listen(port);

// display a message on the terminal
console.log("Server running at port= " + port);
