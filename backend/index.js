const express = require('express');
const authRoute = require('./routes/auth');
const homeRoute = require('./routes/home');
const refreshRoute = require('./routes/refresh');
const logoutRoute = require('./routes/logout');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const PORT = process.env.PORT || 3500;
const server = express();

// Cross Origin Resource Sharing
server.use(cors());

// built-in middleware for json
server.use(express.json());

// built-in middleware to handle urlencoded form data
server.use(express.urlencoded({ extended: false }));

// middleware for cookies
server.use(cookieParser());



//Routes
server.use('/auth', authRoute);
server.use('/refresh', refreshRoute);
server.use('/home', homeRoute);
server.use('/logout', logoutRoute);

//Handle Invalid Routes
server.all('*', (req, res) => {
    res.status(404).send("Route not found");
});


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})