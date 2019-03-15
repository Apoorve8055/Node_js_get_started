var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use(session({secret:"this is encription key"}));

app.set('view engine','ejs');

var sessMgmt ;
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
    sessMgmt = req.session;

    var user = req.body.user;
    var pass = req.body.pass;

    if(user == "Apoorve" && pass == "12345"){
        sessMgmt.auth = 1;
        res.redirect('/admin');
    }else{
        sessMgmt.auth = 2;
        res.render('login',{auth : sessMgmt.auth} );
    }
});

app.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
});


app.get('/admin',function(req,res){
    sessMgmt = req.session;

    if(sessMgmt.auth == 1){
       res.render('admin');
   }else{
       res.redirect('/login');
   }

});
app.listen(8080);