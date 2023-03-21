const express = require('express');
const authController = require('../controllers/authController');
const routes = express.Router();


// LOgin Route
routes.post('/login', authController.loginUser);
// Register Route
routes.post('/register', authController.registerUser);

module.exports = routes;