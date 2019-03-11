var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
    res.render('index');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

app.post('/', function(req, res){
    console.log(req.body);
    var fname = req.body.fn;
    var lname = req.body.ln;
    res.send('Fisrt NAme :'+fname+'Last Name : '+lname);
});

app.listen(8080);