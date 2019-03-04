
var http = require('http');
var mod = require('./Module.js');
http.createServer(function (req,res) {
    res.write(mod.hw +" Date :" + mod.date());
    res.end();
}).listen(8080);

// on console

console.log(mod.hw," Date :",mod.date());
