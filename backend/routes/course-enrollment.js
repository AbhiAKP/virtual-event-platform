const express = require("express");
const db = require("../dbConnection");
const verifyJWT = require("../middleware/verifyJWT");

const routes = express.Router();

// Route for user enrollment
routes.post('/enroll', verifyJWT, (req, res) => {
  const { user_id, course_id } = req.body;
  const sql = 'INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)';
  db.query(sql, [user_id, course_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error enrolling in course!');
    } else {
      res.send(`Enrollement Successfull`);
    }
  });
});

// Route for user rating submission
routes.put('/rate', verifyJWT, (req, res) => {
  const { user_id, course_id, course_rating } = req.body;
  const sql = 'UPDATE enrollments SET course_rating = ? WHERE user_id = ? AND course_id = ?';
  db.query(sql, [course_rating, user_id, course_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error submitting rating!');
    } else if (result.affectedRows === 0) {
      res.status(404).send('No enrollment found for user and course!');
    } else {
      res.send(`Rating successfully submitted`);
    }
  });
});

// Route for user unenrollment
routes.delete('/unenroll', verifyJWT, (req, res) => {
  const { user_id, course_id } = req.body;
  const sql = 'DELETE FROM enrollments WHERE user_id = ? AND course_id = ?';
  db.query(sql, [user_id, course_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error unenrolling from course!');
    } else if (result.affectedRows === 0) {
      res.status(404).send('No enrollment found for user and course!');
    } else {
      res.send(`User unenrolled from course.`);
    }
  });
});

module.exports = routes;
