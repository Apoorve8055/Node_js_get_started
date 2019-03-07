var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('hellow Apoorv');
})

var server = app.listen(8080,function(){
console.log(server.address().address,server.address().port);
})