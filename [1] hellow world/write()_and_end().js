// Hellow World Program using res.write() and res.end()
var http = require('http');

http.createServer(
    function (req,res) {
        var data  = `<!DOCTYPE html>
<html>
<head>
    <title>Apoorve</title>
</head>
<body>
<h1>Apoorve</h1>
<p>my name is Apoorve kumar Verma</p>
</body>
</html>`;
       res.write(data);
       res.write("test String");
        res.end("('+')");
    }
).listen(8080);



