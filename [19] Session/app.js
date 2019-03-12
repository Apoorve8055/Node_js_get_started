var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    if(req.session.viewCount){
        req.session.viewCount++;
        res.send('Page View : '+req.session.viewCount);
    }else{
        req.session.viewCount = 1;
        res.send('Welcome to this Session Page use count the page view using Session <br>'+'Page View : '+req.session.viewCount);
    }
});
app.listen(8080);