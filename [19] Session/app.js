var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: "Session encription"}));

app.get('/', function(req, res){
    if(req.session.viewCount){
        req.session.viewCount++;
        res.send('Page View : '+req.session.viewCount+'<br> <a href="/destroy">Destroy Session </a>');

    }else{
        req.session.viewCount = 1;
        res.send('Welcome to this Session Page use count the page view using Session <br>'+'Page View : '+req.session.viewCount);
    }
});

app.get('/destroy', function(req, res){
        req.session.destroy();
});

app.listen(8080);