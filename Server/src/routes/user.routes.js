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
Line 5 - We import the fetchUsers function from the user.controllers.js file. This function will be responsible for fetching the list of users from the database and sending it back in the response.
Line 7 - We define a GET route for the path '/users'. When a GET request is made to this path, the fetchUsers function will be called to handle the request and send the appropriate response.
Line 9 - We export the router object so that it can be used in other parts of the application, such as in the main server file where we will set up our Express app and use this router for handling user-related routes.



 */