const express = require("express");
const routes = express.Router();
const db = require("../dbConnection");
const verifyJWT = require("../middleware/verifyJWT");

routes.put("/course/:course_id", verifyJWT, (req, res) => {
  const course_id = req.params.course_id;
  const user_name = req.user;
  const updateData = req.body;

  // Check if course exists
  db.query("SELECT * FROM courses WHERE id = ?", [course_id], (error, results) => {
      if (error) {
        res.status(500).send("Error fetching course");
      } else if (results.length === 0) {
        res.status(404).send("Course not found");
      } else {
        const course = results[0];

        // Verify user
        if (course.user_name !== user_name) {
          res.status(403).send("User not authorized");
        } else {
          // Update course
          // Store keys in columns array and values in values array
          const columns = [];
          const values = [];
          for (const key in updateData) {
            if (key === 'user_name') {
                continue;
            }
            columns.push(key);
            if (key === "course_objective") {
              values.push(JSON.stringify(updateData[key]));
              continue;
            }
            values.push(updateData[key]);
          }

          if (columns.length === 0) {
            res.status(400).send("No fields to update");
          } else {
            // Build SQL query
            const qry = `UPDATE courses SET ${columns.map((col) => `${col} = ?`).join(", ")} WHERE id = ? AND user_name = ?`;

            // Execute query with values array
            db.query(qry, [...values, course_id, user_name], (err, _result) => {
              if (err) {
                res.status(500).json( { message: "Error updating course", sqlMessage: `${err}` } );
              } else {
                res.status(200).send('Course updated successfully');
              }
            });
          }
        }
      }
    }
  );
});

module.exports = routes;
