var express = require('express');
var app = express();


app.use('/test',function(req,res,next){
    console.log("Start");
    next();
})

app.use('/test',function(req,res,next){
    console.log("End");
    next();
})

app.get('/test',function(req,res){
    res.send("hellow");
})

app.listen(8080);