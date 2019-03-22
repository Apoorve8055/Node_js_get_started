
var myJSON = { "name": "Chris", "age": "38" };
var myString = JSON.stringify(myJSON);
console.log(myString);
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

console.table(obj);
