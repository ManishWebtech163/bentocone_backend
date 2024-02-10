const port = 3000


// --
const express = require('express')
const mongoose = require('mongoose')


// --app--
const app = express()


// Connecting to the database

mongoose.connect("mongodb://localhost:27017/bentoclone").then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
});



// --routes--
const usersRoute = require('./routes/users')


// --config routes--
app.use(usersRoute)


// app.use('http://localhost:3000', usersRoute)




// --start app--
app.listen(port, () => {
    console.log("run server");
})