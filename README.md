# Node_js_get_started
My Node js All Codes Description
=========================================================================================================================================
                                                         => [1] hellow world <=

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
=> This method kind of makes sense, right? There's a response and once we have collected the data or did something else 
   we want to present that to the caller and as a last step we should end the session - this could be achieved by calling res.end().
   
=========================================================================================================================================
