const User = require('../models/user.models')

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json({ 
        status: 'SUCCESS',
        message: 'Users fetched successfully', 
        data: users 
    })
  } catch (error) {
    res.status(500).json({ 
        status: 'FAILED',
        message: 'Something went wrong', error })
  }
}

const createUser = async (req, res) => {
  try {
    const {name, email, age} = req.body
    await User.create({name, email, age})
    res.json({ 
        status: 'SUCCESS',
        message: 'User created successfully', 
    })
  } catch (error) {
    res.status(500).json({ 
        status: 'FAILED',
        message: 'Something went wrong', error })
  }
}

const updateUser = async (req, res) => {
  try {
    const {id} = req.params
    const {name, age} = req.body

    const user = await User.findById(id)
    if(!user) {
        res.status(404).json({
            status: 'FAILED',
            message: 'User not found'
        })
    }

    if(name)
      user.name = name
    if(age)
      user.age = age

    await user.save()

    res.json({            
        status: 'SUCCESS',
        message: 'User updated successfully', 
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ 
        status: 'FAILED',
        message: 'Something went wrong', error })
  }
}

const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.json({ 
        status: 'SUCCESS',
        message: 'User deleted successfully', 
    })
  } catch (error) {
    res.status(500).json({ 
        status: 'FAILED',
        message: 'Something went wrong', error })
  }
}

module.exports = {
    fetchUsers,
    createUser, 
    updateUser,
    deleteUser
}

/*
NOTES TO CODE:
Line 1 - We import the User model from the user.models.js file. This model represents the structure of the user data in our MongoDB database and provides methods for interacting with the user collection.

Line 3-14 - We define the fetchUsers function, which is an asynchronous function that handles the logic for fetching all users from the database. It uses the User.find() method to retrieve all user documents and sends a JSON response with the status, message, and data (the list of users). If an error occurs during this process, it catches the error and sends a JSON response with a status of 'FAILED' and an error message.

Line 16-27 - We define the createUser function, which is an asynchronous function that handles the logic for creating a new user in the database. It extracts the name, email, and age from the request body and uses the User.create() method to create a new user document in the database. It then sends a JSON response indicating that the user was created successfully. If an error occurs, it catches the error and sends a JSON response with a status of 'FAILED' and an error message.

Line 29-50 - We define the updateUser function, which is an asynchronous function that handles the logic for updating an existing user in the database. It extracts the user ID from the request parameters and the name and age from the request body. It first checks if a user with the specified ID exists in the database using User.findById(). If the user is not found, it sends a JSON response with a status of 'FAILED' and a message indicating that the user was not found. If the user is found, it updates the user's name and age if they are provided in the request body, saves the updated user document, and sends a JSON response indicating that the user was updated successfully. If an error occurs, it catches the error and sends a JSON response with a status of 'FAILED' and an error message.

Line 52-63 - We define the deleteUser function, which is an asynchronous function that handles the logic for deleting a user from the database. It extracts the user ID from the request parameters and uses the User.findByIdAndDelete() method to delete the user document with the specified ID from the database. It then sends a JSON response indicating that the user was deleted successfully. If an error occurs, it catches the error and sends a JSON response with a status of 'FAILED' and an error message.

Line 80-85 - We export the functions fetchUsers, createUser, updateUser, and deleteUser as an object so that they can be imported and used in other parts of the application, such as in the user.routes.js file where we will define the routes for handling user-related requests. 

*/