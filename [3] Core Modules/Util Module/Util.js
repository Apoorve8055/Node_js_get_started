var util = require('util');
var text = 'my name is %s and my age is %d';
var util_text = util.format(text,'Apoorve Kumar verma' ,20);
console.log(util_text);