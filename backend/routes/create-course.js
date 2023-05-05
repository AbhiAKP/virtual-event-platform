const express = require("express");
const routes = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const db = require("../dbConnection");
const multer = require("multer");
const path = require("path")

// Define the storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/course_data"));
  },
  filename: function (req, file, cb) {
    const randomString = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `${randomString}${fileExtension}`);
  },
});

// Create the middleware to handle file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10 MB file size limit
}).fields([
  { name: "course_img", maxCount: 1 },
  { name: "course_video", maxCount: 1 },
]);

routes.post("/", verifyJWT, (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
      res.status(400).json({ error: "File size limit exceeded", errorMessage: err });
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
      res.status(500).json({ error: "Error uploading file", errorMessage: err });
    } else {
      // No error occurred.
      // Extract the data from the request body
      const user_name = req.user;
      const {
        course_name,
        course_desc,
        category,
        subcategory,
        course_duration,
        course_objective,
        course_keywords,
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
        req.files.course_img ? req.files.course_img[0].path : "",
        req.files.course_video ? req.files.course_video[0].path : "",
        category,
        subcategory,
        JSON.stringify(course_objective),
        course_duration,
        course_keywords,
      ];

      console.log(values);
      // Execute the SQL query
      db.query(qry, values, (err, result) => {
        if (err) {
          console.error(err);
          res
            .status(500)
            .json({ error: "Error inserting data into courses table" });
        } else {
          res.status(201).json({ message: "Data inserted into courses table" });
        }
      });
    }
  });
})

module.exports = routes;
