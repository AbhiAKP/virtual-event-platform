const express = require('express');
const authRoute = require('./routes/auth');
const homeRoute = require('./routes/home');
const refreshRoute = require('./routes/refresh');
const logoutRoute = require('./routes/logout');
const viewCourseRoute = require('./routes/view-course');
const searchCoursesRoute = require('./routes/search-courses');
const enrollCourseRoute = require('./routes/course-enrollment');
const joinMeetRoute = require('./routes/join-meet');
const createCourseRoute = require('./routes/create-course');
const createTracksRoute = require('./routes/create-tracks');
const updateCourseRoute = require('./routes/update-course');
const updateTracksRoute = require('./routes/update-tracks');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const server = express();

// Cross Origin Resource Sharing
server.use(cors());

// built-in middleware for json
server.use(express.json());

// built-in middleware to handle urlencoded form data
server.use(express.urlencoded({ extended: false }));

// middleware for cookies
server.use(cookieParser());



//Routes
server.use('/auth', authRoute);
server.use('/refresh', refreshRoute);
server.use('/home', homeRoute);
server.use('/view-course', viewCourseRoute);
server.use('/search-courses', searchCoursesRoute);
server.use('/enroll-course', enrollCourseRoute);
server.use('/join-meet', joinMeetRoute);
server.use('/create-course', createCourseRoute);
server.use('/create-tracks', createTracksRoute);
server.use('/update-course', updateCourseRoute);
server.use('/update-tracks', updateTracksRoute);
server.use('/logout', logoutRoute);

//Handle Invalid Routes
server.all('*', (req, res) => {
    res.status(404).send("Route not found");
});


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})