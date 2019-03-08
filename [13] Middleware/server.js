var express = require('express');
var app = express();
var route = require('./route.js');

app.use('/test',route);

app.listen(8080);

