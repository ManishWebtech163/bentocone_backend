const express = require('express');
const router = express.Router();

// --user model--
const Users = require('../models/users')


// --add user--
router.post('/register', async (req, res) => {
    console.log(req.body);
    let newUser = new Users({
        name: "manish",
        email: "panchalmanishhhhh163@gmail.com"
    })
    // --save new user-
    await newUser.save()
        .then(success => res.send(success))
        .catch(err => res.send(err))
})
module.exports = router