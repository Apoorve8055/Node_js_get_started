var express = require('express');
var url = require('url');
var app = express();

app.get('/',function(req,res){
    res.send('For set cookie click : <a href="/set">Set Cookie</a> <br> For Delete cookie click : <a href="/del">Set Cookie</a>');

});
app.get('/Set', function(req, res){
    res.cookie('name', 'Apoorve Verma');
    res.end('Cookies is Set!');
});

app.get('/del', function(req, res){
    res.clearCookie('name');
    res.end('Cookies has been deleted!');
});
app.listen(8080);