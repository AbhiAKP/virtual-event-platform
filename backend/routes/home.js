const express = require('express');
const routes = express.Router();
const verifyJWT = require('../middleware/verifyJWT');

routes.get('/', verifyJWT, (req, res) => {
    res.end("hello world");
});

module.exports = routes;