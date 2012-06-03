var http = require("http");
var port = process.env.PORT;

http.createServer(function(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(port);

console.log("Server has started.");