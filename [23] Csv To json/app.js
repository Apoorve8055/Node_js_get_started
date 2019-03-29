var express = require('express');
var app = express();
let csvToJson = require('convert-csv-to-json');
let json = csvToJson.getJsonFromCsv("SampleCSVFile_119kb.csv");
console.table(json);
app.get('/',function(req,res){
    res.send(json);
});
app.listen(8080);