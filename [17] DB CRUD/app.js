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
		_id: '123457',
		name: 'Apoorve Verma',
		email: 'Apoorve@verma',
		courseCount: 24
	}
);

app.get('/insert',function(req,res){
	addRecord.save(function(err){
		if(err) throw err;
	});
});

app.get('/read',function(req,res){
	Mymodel.find({},(err,data)=>{
		if(err) return res.status(500).send(err);
		return res.status(200).send(data);
	});
});

app.get('/update',function(req,res){
	Mymodel.findByIdAndUpdate({"_id":"123457"},{$set: {
			name: 'Avi',
			email: 'avi@verma',
			courseCount: 21
	}},(err,data)=>{
		if(err) return res.status(500).send(err);
		return res.status(200).send(data);
	});
});


app.get('/delete',function(req,res){
	Mymodel.findByIdAndRemove({"_id":"123457"},function(err,data){
		if(err) return res.status(500).send("Data not Deleted");
		return res.status(200).send("Data Deleted Successfully :" + data);
	})
});

app.listen(8080);