var express = require('express');
var app =  express();

app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));
app.get('/home',function(req,res){
    res.render('index',{
        name:"Apoorve"
    });

});

app.listen(8080);