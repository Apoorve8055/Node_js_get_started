var express = require('express');
var app = express();

app.set('view engine','ejs');

var data = {
    fname:"Apoorve",
    lname:"Verma"
}

app.get('/',function(req,res){
    res.render('index',{
        fname: data.fname,
        lname: data.lname
    });
});

app.get('/About',function(req,res){
    res.render('About',{
        fname: data.fname,
        lname: data.lname
    });
});

app.listen(8080);