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

Line 1 - We import the User model from the user.models.js file. This model represents the structure of the user data in our database and provides methods for interacting with the user collection.

Line 3 - We define an asynchronous function called fetchUsers that takes in the request and response objects as parameters. This function will be responsible for fetching the list of users from the database and sending it back in the response.

Line 4 - We use a try-catch block to handle any potential errors that may occur during the execution of the code inside the try block.

Line 5 - We use the User.find() method to retrieve all users from the database. This method returns a promise that resolves to an array of user objects.

Line 6 - If the users are fetched successfully, we send a JSON response with a status of 'SUCCESS', a message indicating that the users were fetched successfully, and the data containing the list of users.

Line 8 - If an error occurs during the fetching of users, we catch the error and send a JSON response with a status of 'FAILED', a message indicating that something went wrong, and the error object.

Line 11 - We define another asynchronous function called createUser that takes in the request and response objects as parameters. This function will be responsible for creating a new user in the database based on the data sent in the request body.

Line 12 - We use destructuring to extract the name, email, and age properties from the request body.

Line 13 - We use the User.create() method to create a new user in the database with the provided name, email, and age. This method returns a promise that resolves to the created user object.

Line 14 - If the user is created successfully, we send a JSON response with a status of 'SUCCESS' and a message indicating that the user was created successfully.

Line 16 - If an error occurs during the creation of the user, we catch the error and send a JSON response with a status of 'FAILED', a message indicating that something went wrong, and the error object.

Line 19 - We define another asynchronous function called updateUser that takes in the request and response objects as parameters. This function will be responsible for updating an existing user in the database based on the data sent in the request body and the user ID provided in the request parameters.

Line 20 - We use destructuring to extract the id from the request parameters and the name and age from the request body.

Line 22 - We use the User.findById() method to find a user in the database by its ID. This method returns a promise that resolves to the user object if found, or null if not found.

Line 23 - If no user is found with the provided ID, we send a JSON response with a status of 'FAILED' and a message indicating that the user was not found.

Line 26 - If a user is found, we update its name and age properties with the new values provided in the request body.

Line 28 - We call the save() method on the user object to save the updated user back to the database. This method returns a promise that resolves to the updated user object.

Line 30 - If the user is updated successfully, we send a JSON response with a status of 'SUCCESS' and a message indicating that the user was updated successfully.

Line 32 - If an error occurs during the updating of the user, we catch the error and send a JSON response with a status of 'FAILED', a message indicating that something went wrong, and the error object.
*/