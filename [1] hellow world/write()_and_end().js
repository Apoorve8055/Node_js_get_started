// Hellow World Program using res.write() and res.end()
var http = require('http');

http.createServer(
    function (req,res) {
        res.write("Hellow World");
        res.end("('+')");
    }
).listen(8080);



