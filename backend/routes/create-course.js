const express = require("express");
const routes = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const db = require("../dbConnection");

routes.post("/", verifyJWT, (req, res) => {
    // Extract the data from the request body
    const user_name = req.user;
  const {
    course_name,
    course_desc,
    course_img,
    course_video,
    category,
    subcategory,
    course_objective,
    course_duration,
    course_keywords
  } = req.body;

  // Define the SQL query to insert data into the courses table
  const qry = `
    INSERT INTO courses (user_name, course_name, course_desc, course_img, course_video, category, subcategory, course_objective, course_duration, course_keywords)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Define the values to insert into the courses table
  const values = [
    user_name,
    course_name,
    course_desc,
    course_img,
    course_video,
    category,
    subcategory,
    JSON.stringify(course_objective),
    course_duration,
    course_keywords
  ];

  // Execute the SQL query
  db.query(qry, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error inserting data into courses table' });
    } else {
      res.status(201).json({ message: 'Data inserted into courses table' });
    }
  });
});

module.exports = routes;

