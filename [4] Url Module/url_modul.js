var url = require('url');
var path = 'http://localhost:8080/default.htm?name=Apoorve&name=123';
var q = url.parse(path,true);
console.log('url Details :');
console.log('url Host name : ',q.host);
console.log('url Path : ',q.pathname);
console.log('url Search : ',q.search);
var q = q.query;
console.log(q.name);