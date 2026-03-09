const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('SocialMedApp_3.0')
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})  

/**
 Line 1 - We import the Express library, which is a web application framework for Node.js. It simplifies the process of creating a server and handling HTTP requests.

 Line 3 - We create an instance of the Express application by calling the express() function. This instance will be used to define routes and middleware for our server.

 Line 5-7 - We define a route for the root URL ('/'). When a GET request is made to this URL, the callback function is executed, which sends the response 'SocialMedApp_3.0' back to the client.

 Line 9-11 - We start the server by calling app.listen() and specifying the port number (4000). The callback function is executed once the server is successfully started, and it logs a message to the console indicating that the server is running.
 */