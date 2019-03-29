var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "node_db"
});
var qdata;
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

/*    con.query("CREATE DATABASE node_db", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });


con.query("CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), pass VARCHAR(255))",function(err,result){
    if(err) throw err;
    console.log("Table Created :"+result);
});

*/

});


app.listen(8080);