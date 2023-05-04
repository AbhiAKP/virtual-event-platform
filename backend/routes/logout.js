const express = require('express');
const logoutController = require('../controllers/logoutController');
const routes = express.Router();


// Logout Token Route
routes.post('/', logoutController);


module.exports = routes;