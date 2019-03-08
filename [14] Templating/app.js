var express = require('express');
var app =  express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/home',function(req,res){
    res.render('index',{
        name: "PUG Templating ",
        url:"www.anyurl.com"
    });
});

app.listen(8080);