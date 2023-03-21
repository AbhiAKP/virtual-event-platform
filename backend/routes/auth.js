const express = require('express');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const routes = express.Router();


// Login Route
routes.post('/login', loginController);
// Register Route
routes.post('/register', registerController);

module.exports = routes;