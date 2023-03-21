const express = require('express');
const authRoutes = require('./routes/auth');
const PORT = 3000;
const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use('/', authRoutes);

server.all('*', (req, res) => {
    res.status(404).send("Route not found");
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})