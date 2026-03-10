const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
 })

 const User = mongoose.model('User', userSchema)

 module.exports = User


 /**
  Notes to code:

 Line 1 - We import the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to model our application data and interact with the MongoDB database.

 Line 3 - We define a new schema for our User model using mongoose.Schema(). This schema defines the structure of the documents that will be stored in the MongoDB collection for users.  We could have created a more sophisiticated schema with validation rules, but for simplicity, we are just defining the fields without any additional constraints. the model below is a more sophisiticated version of the user model with validation rules:
  name:{
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    age: {
        type: Number,
    }
    


  */