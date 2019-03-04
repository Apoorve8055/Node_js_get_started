
var http = require('http');
var mod = require('./Module.js');
http.createServer(function (req,res) {
    res.write(" "+mod.hw +" \n Date :" + mod.date());
    res.write("\n Add : "+ mod.fun.add(2,3) +"\n Multi : "+mod.fun.multi(2,3));
    res.end();
}).listen(8080);

// on console

console.log(mod.hw," Date :",mod.date(),mod.fun.add(2,3),mod.fun.multi(2,3));
