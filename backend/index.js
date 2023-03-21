const express = require('express');
const authRoute = require('./routes/auth');
const PORT = 3000;
const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use('/', authRoute);


//Handle Invalid Routes
server.all('*', (req, res) => {
    res.status(404).send("Route not found");
});


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})