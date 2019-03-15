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
var json_data = `[
  {
    "name": "Hitesh",
    "email": "hitesh@hiteshchoudhary.com",
    "courseCount": 4
  },
  {
    "name": "Mark",
    "email": "mark@example.com",
    "courseCount": 2
  },
  {
    "name": "Tom",
    "email": "tom@example.com",
    "courseCount": 5
  },
  {
    "name": "Jerry",
    "email": "jerry@example.com",
    "courseCount": 3
  },
  {
    "name": "spider",
    "email": "spider@example.com",
    "courseCount": 2
  },
  {
    "name": "super",
    "email": "super@example.com",
    "courseCount": 3
  },
  {
    "name": "Jade",
    "email": "jade@example.com",
    "courseCount": 2
  },
  {
    "name": "Theodore",
    "email": "theodore@example.com",
    "courseCount": 2
  },
  {
    "name": "Kirk",
    "email": "kirk@example.com",
    "courseCount": 9
  },
  {
    "name": "Fleming",
    "email": "fleming@example.com",
    "courseCount": 12
  },
  {
    "name": "Roberta",
    "email": "roberta@example.com",
    "courseCount": 5
  },
  {
    "name": "Lawrence",
    "email": "lawrence@example.com",
    "courseCount": 8
  },
  {
    "name": "Terry",
    "email": "trry@example.com",
    "courseCount": 13
  },
  {
    "name": "Rhodes",
    "email": "rhodes@example.com",
    "courseCount": 14
  },
  {
    "name": "Sullivan",
    "email": "sullivan@example.com",
    "courseCount": 17
  },
  {
    "name": "Robert",
    "email": "robert@example.com",
    "courseCount": 13
  },
  {
    "name": "Gordon",
    "email": "gordon@example.com",
    "courseCount": 18
  },
  {
    "name": "Henry",
    "email": "henry@example.com",
    "courseCount": 2
  },
  {
    "name": "May",
    "email": "may@example.com",
    "courseCount": 5
  },
  {
    "name": "Clark",
    "email": "clark@example.com",
    "courseCount": 19
  },
  {
    "name": "Katrina",
    "email": "katrina@example.com",
    "courseCount": 13
  },
  {
    "name": "Mayers",
    "email": "mayers@example.com",
    "courseCount": 11
  },
  {
    "name": "Tina",
    "email": "tina@example.com",
    "courseCount": 14
  },
  {
    "name": "Mason",
    "email": "mason@example.com",
    "courseCount": 4
  },
  {
    "name": "Alexis",
    "email": "alexis@example.com",
    "courseCount": 13
  },
  {
    "name": "Ford",
    "email": "ford@example.com",
    "courseCount": 9
  }
]
`;

json_data = JSON.parse(json_data);
app.get('/admin',function(req,res){
    sessMgmt = req.session;

    if(sessMgmt.auth == 1){
       console.table(json_data);
       res.render('admin',{data:json_data});
   }else{
       res.redirect('/login');
   }
});

app.post('/Search',function(req,res){
    res.send(req.body.sea);
});
app.listen(8080);