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

module.exports = {
    fetchUsers
}