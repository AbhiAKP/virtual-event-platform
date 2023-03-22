const express = require('express');
const refreshTokenController = require('../controllers/refreshTokenController');
const routes = express.Router();


// Refresh Token Route
routes.get('/', refreshTokenController);


module.exports = routes;