const express = require('express');
const verifyJWT = require('../middleware/verifyJWT');
const routes = express.Router();

routes.get('/', verifyJWT, (req, res) => {
    res.end("hello world");
});

module.exports = routes;