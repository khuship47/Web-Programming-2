/* These additional modules allow us to process URL
   paths as well as read/write files; we will use these later */
const http = require("http"); 
const url = require("url"); 
const path = require("path"); 
const fs = require("fs");

 // handler for errors
const output500Error = (response) => { 
    response.writeHead(500, {"Content-Type": "text/html"}); 
    response.write("<h1>500 Error</h1>\n"); 
    response.write("Something went wrong with request\n"); 
    response.end();
};

// maps file extention to MIME types
const mimeType = {
    '.html': 'text/html', 
    '.json': 'application/json', 
    '.jpg': 'image/jpeg', 
    '.svg': 'image/svg+xml'
};
    
// our HTTP server now returns requested files
const server = http.createServer( (request, response) => {
    // get the filename from the URL
    let requestedFile = url.parse(request.url).pathname;
    // if no file provided in request, default to index.html
    if (requestedFile.length == 1) 
        requestedFile = "/index.html";
    // now turn that into a file system file name by adding the // current local folder path in front of the filename
    const ourPath = process.cwd() + "/public";
    let filename = path.join(ourPath, requestedFile); console.log(filename);
    // try reading the file
    fs.readFile(filename, "binary", (err, file) => { 
        if (err) {
            output500Error(response);
            return; 
        }

        // based on the URL path, extract the file extension
        const ext = path.parse(filename).ext;

        // specify the mime type of file via header
        const header = { "Content-type": mimeType[ext] || "text/plain" };
        response.writeHead(200, header);
        
        // output the content of file
        response.write(file, "binary");
        response.end(); 
    });
});

/*
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
*/


// Listen on port on localhost
let port = 8080;
server.listen(port);

// display a message on the terminal
console.log("Server running at port= " + port);
