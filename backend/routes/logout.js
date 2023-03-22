const express = require('express');
const logoutController = require('../controllers/logoutController');
const routes = express.Router();


// Logout Token Route
routes.get('/', logoutController);


module.exports = routes;