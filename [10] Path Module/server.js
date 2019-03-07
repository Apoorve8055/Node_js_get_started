var express = require('express');
var app = express();
var path = require('path');
//file base name
var d = path.basename('/Users/Refsnes/demo_path.js');
console.log(d);
// directories of a path
var d =path.dirname('/users/asadsd/img.jpg');
console.log(d);
// delimiter
console.log(path.delimiter);

// join
var x = path.join('Users', 'Refsnes', 'demo_path.js');
console.log(x);

app.listen(8080,function(){

})