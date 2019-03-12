var mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var myschema = new schema({
    _id: {type: String},
    name: {type: String},
    email: {type: String},
    courseCount: {type: Number}
});

var mymodel = mongoose.model('users',myschema);
module.exports = mymodel ;