var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var jsonQuery = require('json-query')

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
    "Course": "BCA",
    "gender" : "Male"
  },
  {
    "name": "Mark",
    "email": "mark@example.com",
    "Course": "MCA",
     "gender" : "Male"

  },
  {
    "name": "Tom",
    "email": "tom@example.com",
    "Course": "BBA",
        "gender" : "Male"

  },
  {
    "name": "Jerry",
    "email": "jerry@example.com",
    "Course": "BTEACH",
        "gender" : "Male"

  },
  {
    "name": "spider",
    "email": "spider@example.com",
    "Course": "BTEACH",
        "gender" : "FeMale"

  },
  {
    "name": "super",
    "email": "super@example.com",
    "Course": "MCA",
            "gender" : "FeMale"

  },
  {
    "name": "Jade",
    "email": "jade@example.com",
    "Course": "BCA",
            "gender" : "FeMale"

  },
  {
    "name": "Theodore",
    "email": "theodore@example.com",
    "Course": "BBA",
            "gender" : "FeMale"

  },
  {
    "name": "Kirk",
    "email": "kirk@example.com",
    "Course": "MCA",
            "gender" : "FeMale"

  },
  {
    "name": "Fleming",
    "email": "fleming@example.com",
    "Course": "BCA",
            "gender" : "FeMale"

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


if( !(req.body.gender == '0') &&  !(req.body.Course == '0'))
{  

  var result = jsonQuery(' [* gender = '+ req.body.gender+ ' &  Course = '+ req.body.Course +'  ]  ', {data: json_data}).value;
  console.table(result);

} else if(!(req.body.gender == '0') ||  !(req.body.Course == '0')){

    var result = jsonQuery(' [* gender = '+ req.body.gender+ ' |  Course = '+ req.body.Course +'  ]  ', {data: json_data}).value;
    console.table(result);
}


    res.render('admin',{data:result});

/*    var result = jsonQuery('[] ', {data: json_data}).value;
    console.table(result);
    res.render('admin',{data:result});
*/
});
app.listen(8080);