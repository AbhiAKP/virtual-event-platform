const express = require('express');
const PORT = 3000;
const server = express();


server.get('/', (req, res) => {
    res.end("Hello World!");
    console.log(req.method, req.path);
});

server.get('/api', (req, res) => {
    res.end("API accessed!");
    console.log(req.method, req.path);
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})