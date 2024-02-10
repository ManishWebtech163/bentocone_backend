const mongoose = require('mongoose')

// --schema for users--
const usersSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String }
})


// --model--
const Users = mongoose.model('users', usersSchema)

module.exports = Users