# Node_js_get_started
My Node js All Codes Description
======================================================================================================================================

                                                         => **[1] hellow world** <=

Include Modules :
=> include a module, use the require() function with the name of the module:
   var http = require('http');
   
res.send() :
=> Sending a response can be achieved by calling the res.send() method. The signature of this method looks like this: res.send([body]) 
   where the body can be any of the following: Buffer, String, an Object and an Array.
   This method automatically sets the Content-Type response header as well based on the argument passed to the send() method, 
   so for example if the [body] is a Buffer the Content-Type will be set to application/octet-stream unless of course we programmatically 
   set it to be something else.

res.end() :
=> There's a response and once we have collected the data or did something else 
   we want to present that to the caller and as a last step we should end the session - this could be achieved by calling res.end().
   
res.write() :
=>If this method is called and response.writeHead() has not been called, it will switch to implicit header mode and flush the implicit headers.
  This sends a chunk of the response body. This method may be called multiple times to provide successive parts of the body.
  Note that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must
  not include a message body.
  
================================================================================

                                           => [2] Create Modules <=

module.exports or exports :

=>The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a 
  variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports 
  or exports, will be exposed as a module.

================================================================================

                                             => [3] Core Modules <=
 
Core Module	Description :

http:

=> http module includes classes, methods and events to create Node.js http server.

url	:

=> url module includes methods for URL resolution and parsing.

querystring:	

=> querystring module includes methods to deal with query string.

path :	

=> path module includes methods to deal with file paths.

fs :

=> fs module includes classes, methods, and events to work with file I/O.

util :	

=> util module includes utility functions useful for programmers. 

----------------------------------------------------------------------------
                                HTTP Properties and Methods:
Method	Description:

createClient() :

=> Deprecated. Creates a HTTP client

createServer():	

=> Creates an HTTP server

get():	

=> Sets the method to GET, and returns an object containing the user's request

globalAgent :	

=> Returns the HTTP Agent

request():	

=> Returns an object containing the user's request

================================================================================
