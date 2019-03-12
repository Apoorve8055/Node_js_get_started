var express = require('express');
var mongoose = require('mongoose');
var assert = require('assert');
var app = express();

var url = "mongodb://localhost:27017/mydb";
mongoose.connect(url);

var db = mongoose.connection;

db.on('error',console.error.bind(console,"connection error"));
/*db.on('error',function(){
   console.log('DB  Connection Not Bridge !     ');
}); */
db.on('open',function(){
   console.log('DB Connection Successful!');
});


mongoose.model('tut',{topic: String });

console.log( mongoose.model('tut').find());
app.get('/',function(req,res){

   mongoose.model('tut').find({'name':'Apoorve'},{_id:0},function(err,tut){
      res.send("<pre>"+tut+"<pre>");
   });
});

app.listen(8080,function(){
   console.log('connected');
});