const express = require("express");
const routes = express.Router();
const db = require("../dbConnection");
const verifyJWT = require("../middleware/verifyJWT");

// GET course details by id
routes.get("/course/:course_id", verifyJWT, (req, res) => {
  const course_id = req.params.course_id;
  const username = req.user;

  const qry = `SELECT * FROM courses WHERE id = ? AND user_name = ?`;

  db.query(qry, [course_id, username], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching course details");
    } else {
      if (result.length > 0) {
        res.send(result[0]);
      } else {
        res.status(404).send("Course not found");
      }
    }
  });
});

// GET tracks associated with a course by course_id
routes.get("/course/:course_id/tracks", verifyJWT, (req, res) => {
  const course_id = req.params.course_id;
  const username = req.user;

  const qry = `SELECT * FROM course_tracks WHERE course_id = ?`;

  db.query(qry, [course_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching tracks");
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.status(404).send("No tracks found for the course");
      }
    }
  });
});

module.exports = routes;
