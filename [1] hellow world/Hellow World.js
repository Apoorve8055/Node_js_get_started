//Hellow World Program
var http = require('http');
http.createServer(function(req,res){
    res.write("Hellow Apoove");
    res.end();
}).listen(8080);

// on Console

console.log("Hellow Apoove");