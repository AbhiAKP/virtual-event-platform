const express = require('express');
const routes = express.Router();
const verifyJWT = require('../middleware/verifyJWT');

routes.get('/', verifyJWT, (req, res) => {
    res.end("hello world");
    console.log(req.method, req.url);
});

module.exports = routes;