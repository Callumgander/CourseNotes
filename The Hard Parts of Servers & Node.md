# The Hard Parts of Servers & Node.js

What are some of the reasons to learn nodejs?
- Can build applications that can handle millions of users without blocking
- Can build anything from simple webpages to large scale applications to windows/mac desktop apps (with electron), and hardware (embedded systems)
- allows us to build entire applications end-to-end in one language

What features of the computer are required for sending data back to the user from a server?
- Network socket - to receive and send back messages over the internet
- Filesystem - that's where the html/css/javascript code is stored in files
- CPU - for cryptography and optimizing hashing passwords
- Kernel - I/O management

How do you use the http feature of Node to set up an open socket
- `const server = http.createServer()`
- `server.listen(80)`

What is the default port for any message being sent from a browser to a server?
- 80

What does server.listen(80) do?
- makes the server receive http requests that come through port 80

What are the parameters passed to whatever function deals with the incoming and outgoing data to a server?
- req and res 

What is the 'protocol' for browser-server interaction?
- HTTP format

What does a HTTP message consist of?
- request line (url, method), e.g ("/tweets", GET)
- Headers, e.g. metadata: what browser he's using, location, etc.
- Body (optional)

What does nodemon do?
- automatically reloads your code everytime a change is saved

How do you get the server to autorun a function when a client error is sent to the server?
- server.on('clientError', doOnError)

How do you read files in Node?
- fs.readFile('./fileName', autoRunFunction )

How do you convert a JSON file back to a JS object?
- clean objName = JSON.parse(jsonName)

What is the default batch size in Nodejs?
- 64kb

How do you set up a stream in node?
- `const streamObject = fs.createReadStream('./filepath.json')`
- Then use `streamObject.on('data', dOnNewBatch)`

UP TO ASYNCHRONICITY 

