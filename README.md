# Node_js_get_started
My Node js All Codes Description
=========================================================================================================================================
                                                         => [1] hellow world <=

Include Modules :
----------------
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
  
=========================================================================================================================================
