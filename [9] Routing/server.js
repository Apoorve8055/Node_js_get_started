var express = require('express');
var app = express();

app.get('/lavi',function(req,res){
    res.send(' lavi GET requrest');
})

app.get('/ravi',function(req,res){
    res.send(' ravi GET requrest');
})

app.get('/*avi',function(req,res){
    res.send('Page Listing...');
})

app.post('/',function(req,res){
    res.send('Post Request');
})

app.listen(8080,function(){
    console.log('Connected !');
})