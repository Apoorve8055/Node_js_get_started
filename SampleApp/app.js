var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
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

app.get('/Login',function(req,res){
    res.render('login',{auth:0});
});

app.post('/loginAuth',function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;
    if(user == "Apoorve" && pass == "12345"){
       res.render('login',{auth:1} );
    }else{
        res.render('login',{auth:2} );
    }
});

app.listen(8080);