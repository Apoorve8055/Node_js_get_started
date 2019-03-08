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
-----------------------------------------------------------------------------
Util Module :
=> The Util module provides access to some utility functions.   
Method  &   Description:

debuglog()	Writes debug messages to the error object
deprecate()	Marks the specified function as deprecated
format()	Formats the specified string, using the specified arguments
inherits()	Inherits methods from one function into another
inspect()	Inspects the specified object and returns the object as a string

================================================================================

                                             => [4] Url Modules <=
                                             
URL Module :
=> The URL module splits up a web address into readable parts. like , host , pathname , search ,parameters
url.parse():
=> method, and it will return a URL object with each part of the address as properties

================================================================================

                                             => [5] NPM <=

NPM :
=> NPM is a package manager for Node.js packages, or modules     

Package :
=> A package in Node.js contains all the files you need for a module.
   Modules are JavaScript libraries you can include in your project.

================================================================================

                                             => [6] UPlOAD FILES <=
 Formidable Module :
=>  There is a very good module for working with file uploads, called "Formidable".                                            

================================================================================

                                             => [7] Send an Email <=
Nodemailer Module:
=> The Nodemailer module makes it easy to send emails from your computer.

================================================================================

                                             => [8] Express Framework <=
Express :
=> Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −
   => Allows to set up middlewares to respond to HTTP Requests.
   => Defines a routing table which is used to perform different actions based on HTTP Method and URL.
   => Allows to dynamically render HTML Pages based on passing arguments to templates.

Request & Response :

Express application uses a callback function whose parameters are request and response objects.

app.get('/', function (req, res) {
   // --
})

Request Object : 

=> The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
Response Object :

=> The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

================================================================================

                                             => [9] Routing <=

We have seen a basic application which serves HTTP request for the homepage. 
Routing refers to determining how an application responds to a client request to a particular endpoint,
which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

ex:
=> app.Method(path,Handler)

app.get('/', function (req, res) {
   // --
})

app.post('/', function (req, res) {
   // --
})


================================================================================

                                             => [10]Path Module <=

================================================================================

                                             => [11]Serve Static Method <=

================================================================================

                                             => [12]url Binding <=

================================================================================

                                             => [13] Middleware <=

Middleware :
=> Middleware functions are functions that have access to the request object (req), 
   the response object (res), and the next middleware function in the application’s 
   request-response cycle. These functions are used to modify req and res objects for tasks 
   like parsing request bodies, adding response headers, etc. 
   
================================================================================

                                             => [14] Templating <=
   
   Pug is a templating engine for Express. Templating engines are used to remove the cluttering of our server code with HTML, concatenating strings wildly to existing HTML templates. Pug is a very powerful templating engine which has a variety of features including filters, includes, inheritance, interpolation, etc. There is a lot of ground to cover on this.
   
   To use Pug with Express, we need to install it,
   
   npm install --save pug
   
   
   Now that Pug is installed, set it as the templating engine for your app. You don't need to 'require' it. Add the following code to your index.js file.
   
   app.set('view engine', 'pug');
   app.set('views','./views');
   Now create a new directory called views. Inside that create a file called first_view.pug, and enter the following data in it.
   
   doctype html
   html
      head
         title = "Hello Pug"
      body
         p.greetings#people Hello World!
   To run this page, add the following route to your app −
   
   app.get('/first_template', function(req, res){
      res.render('first_view');
   });
   
   