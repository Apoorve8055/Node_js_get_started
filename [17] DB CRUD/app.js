var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Mymodel = require('./schema.js');
var url = "mongodb://127.0.0.1:27017/avi";
mongoose.connect(url);
var db = mongoose.connection;
db.on('open',function() {
	console.log("db connection briged!");
});
db.on('error',function() {
	console.log("db connection not briged!");
});

//Insert record
var addRecord = new Mymodel(
	{
		_id: '1234',
		name: 'Apoorve',
		email: 'Apoorve@verma',
		courseCount: 23
	}
);

addRecord.save(function(err){
	if(err) throw err;
	Mymodel.find({},function(err,data){
		if(err) throw err;
		console.log(data);
	});
});

app.listen(8080);