const express = require('express')
const dotenv = require('dotenv')

dotenv.config() 

const app = express()

app.get('/', (req, res) => {
  res.send('SocialMedApp_3.0')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 4000')
})  

/**
 Line 1 - We import the Express library, which is a web application framework for Node.js. It simplifies the process of creating a server and handling HTTP requests.
 
 Line 2 - We import the dotenv library, which allows us to load environment variables from a .env file into process.env. This is useful for managing configuration settings, such as the port number for our server. 

 Line 3 - We create an instance of the Express application by calling the express() function. This instance will be used to define routes and middleware for our server.

 Line 4 - We call the config() method of the dotenv library to load the environment variables from the .env file into process.env. This allows us to access the PORT variable defined in the .env file later in our code.

 Line 5-7 - We define a route for the root URL ('/'). When a GET request is made to this URL, the callback function is executed, which sends the response 'SocialMedApp_3.0' back to the client.

 Line 9-11 - We started the server originally by calling app.listen() and specifying the port number (4000) in this code app.listen(4000, () => { }). Once the .env file was set up with the PORT variable (PORT=4000), the server would listen on that port. The callback function is executed once the server is successfully started, and it logs a message to the console indicating that the server is running.


 */