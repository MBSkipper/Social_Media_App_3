const express = require('express')
const router = express.Router()


const { 
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controllers')    

router.get('/', fetchUsers)
router.post('/', createUser) 
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router


/*
NOTES TO CODE:
Line 1 - We import the Express library, which is a web application framework for Node.js. It simplifies the process of creating a server and handling HTTP requests.
Line 2 - We create a new router object using the express.Router() method. This router will be used to define our routes for handling user-related requests.

Line 5-10 - We import the functions fetchUsers, createUser, updateUser, and deleteUser from the user.controllers.js file. These functions contain the logic for handling the respective operations on user data, such as fetching users from the database, creating a new user, updating an existing user, and deleting a user.

Line 12 - We define a GET route for the path '/users'. When a GET request is made to this path, the fetchUsers function will be called to handle the request and send the appropriate response.
Line 13 - We define a POST route for the path '/users'. When a POST request is made to this path, the createUser function will be called to handle the request and create a new user in the database.
Line 14 - We define a PATCH route for the path '/users/:id'. The ':id' part is a route parameter that allows us to specify the ID of the user we want to update. When a PATCH request is made to this path, the updateUser function will be called to handle the request and update the specified user in the database.
Line 15 - We define a DELETE route for the path '/users/:id'. Similar to the PATCH route, the ':id' part allows us to specify the ID of the user we want to delete. When a DELETE request is made to this path, the deleteUser function will be called to handle the request and delete the specified user from the database.

Line 18 - We export the router object so that it can be used in other parts of the application, such as in the main server file where we will set up our Express app and use this router for handling user-related routes.
Line 18 - We export the router object so that it can be used in other parts of the application, such as in the main server file where we will set up our Express app and use this router for handling user-related routes.



 */