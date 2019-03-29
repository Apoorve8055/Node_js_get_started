var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "node_db"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

/*    con.query("CREATE DATABASE node_db", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
*/

    function Show(){
        con.query("SELECT * FROM USERS", function (err, result, fields) {
            if (err) throw err;
            console.table(result);
            console.log(result);
        });
    }


    con.query("CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), pass VARCHAR(255))",function(err,result){
        if(err) throw err;
        console.log("Table Created :"+result);

    });

    Show();

    con.query("insert into users set name = 'Apoorve' , pass = '12345' ",function(err,result){
            if(err) throw err;
            console.log("Table Created :"+result);
    });
    con.query("insert into users set name = 'Avi' , pass = '12345' ",function(err,result){
        if(err) throw err;
        console.log("Table Created :"+result);
    });

    Show();


    con.query('update users set name ="Avi" where id = 2',function(err,result,fields){
        console.log("Update Data");
    });
    Show();

    con.query('delete from users where id=2 ',function(err,result,fields){
        console.log("Delete Data");
    });

    Show();

});



app.listen(8080);