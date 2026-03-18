const express = require('express')
const mongoose = require('mongoose')  
var cors = require('cors')
const dotenv = require('dotenv')

dotenv.config() 

const userRoutes = require('./src/routes/user.routes')

/**Middlewares */
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('SocialMedApp_3.0')
})

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
      console.log(`Server is running on http://${PORT}`)
    })
  })



/**
 Line 1 - We import the Express library, which is a web application framework for Node.js. It simplifies the process of creating a server and handling HTTP requests.

Line 2 - We import the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to model application data and interact with the MongoDB database.
 
 
Line 3 - We import the dotenv library, which allows us to load environment variables from a .env file into process.env. This is useful for managing configuration settings, such as the port number for our server. 

Line 4 - We create an instance of the Express application by calling the express() function. This instance will be used to define routes and middleware for our server.

Line 5 - We call the config() method of the dotenv library to load the environment variables from the .env file into process.env. This allows us to access the PORT variable defined in the .env file later in our code.

Line 7 - We import the userRoutes from the user.routes.js file. This file contains the routes related to user operations, such as fetching users from the database.
 
Line 9 - We use the app.use() method to register the userRoutes middleware with our Express application. This means that any routes defined in user.routes.js will be available in our server.

Line 11 - We use the express.urlencoded() middleware to parse incoming request bodies in a URL-encoded format. This allows us to access form data sent in POST requests.

Line 13 - app.use('', userRoutes) - This line tells the Express application to use the userRoutes middleware for any requests that match the specified path. In this case, we are using an empty string as the path, which means that the routes defined in user.routes.js will be available at the root level of our server. For example, if we have a route defined as '/users' in user.routes.js, it will be accessible at 'http://localhost:4000/users' when we run our server.

Line 15-17 - We define a route for the root URL ('/'). When a GET request is made to this URL, the callback function is executed, which sends the response 'SocialMedApp_3.0' back to the client.

Line 19 - We use the mongoose.connect() method to establish a connection to the MongoDB database. The connection string is retrieved from the MONGODB_URL environment variable defined in the .env file.

Line 19-24 - We started the server originally by calling app.listen() and specifying the port number (4000) in this code app.listen(4000, () => { }). Once the .env file was set up with the PORT variable (PORT=4000), the server would listen on that port. The callback function is executed once the server is successfully started, and it logs a message to the console indicating that the server is running.

Line 21 - We retrieve the PORT variable from process.env, which contains the environment variables loaded from the .env file. This allows us to use the PORT variable to specify the port number for our server.


 */