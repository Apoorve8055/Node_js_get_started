var url = require('url');
var http = require('http');
http.createServer(function(req,res){
    var para  = url.parse(req.url,true);
    para = para.href;
    if(para == "/page-one"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1 style='color: green'> Welcome to Page One </h1>");
    }else if(para == "/page-two"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1 style='color: green'> Welcome to Page two </h1>");
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write("<h1 style='color: red'> 404 Page Note Found </h1>");
    }
    res.end();
}).listen(8080);