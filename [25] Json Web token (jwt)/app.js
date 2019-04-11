var express = require('express');

var app = express();
var jwt = require('jwt-simple');
var payload = {
    "Fname" : "Apoorv",
    "Lname" : "Verma"
};
var secret = 'Any_secret_Key_@123';

// HS256 secrets are typically 128-bit random strings, for example hex-encoded:
// var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')

// encode
var token = jwt.encode(payload, secret);
console.log(token);
// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }
app.listen(8080);