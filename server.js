var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text-plain"});
    response.end("hello world\n");
})

server.listen(7000);