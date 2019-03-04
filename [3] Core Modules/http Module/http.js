//createServer()	Creates an HTTP server
var http =  require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/plain'});
    res.write(" Http Server Created using 8080 Port..  ");
    res.end();
}).listen(8080);


