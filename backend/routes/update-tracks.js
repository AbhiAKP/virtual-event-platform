const express = require("express");
const routes = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const db = require("../dbConnection");

routes.put('/track/:track_id', verifyJWT, (req, res) => {
    const trackId = req.params.track_id;
    const user_name = req.user;
    const updateData = req.body;
  
    // Check if track exists
    db.query('SELECT * FROM course_tracks WHERE id = ?', [trackId], (error, results) => {
      if (error) {
        res.status(500).send('Error fetching track');
      } else if (results.length === 0) {
        res.status(404).send('Track not found');
      } else {
        const track = results[0];
        const course_id = track.course_id;
  
        // Get course associated with track
        db.query('SELECT * FROM courses WHERE id = ?', [course_id], (error, results) => {
          if (error) {
            res.status(500).send('Error fetching course');
          } else if (results.length === 0) {
            res.status(404).send('Course not found');
          } else {
            const course = results[0];
  
            // Verify user
            if (course.user_name !== user_name) {
              res.status(403).send('User not authorized');
            } else {
              // Update track
              const columns = [];
              const values = [];

              for (const key in updateData) {
                if (key === 'course_id') {
                    continue;
                }
                columns.push(key);
                values.push(updateData[key]);
              }
  
              if (columns.length === 0) {
                res.status(400).send('No fields to update');
              } else {
                const sql = `UPDATE course_tracks SET ${columns.map(col => `${col} = ?`).join(', ')} WHERE id = ?`;
  
                db.query(sql, [...values, trackId], (err, results) => {
                  if (err) {
                    res.status(500).json( { message: 'Error updating track', sqlMessage: `${err}`} );
                  } else {
                    res.status(200).send('Track updated successfully');
                  }
                });
              }
            }
          }
        });
      }
    });
  });
  

module.exports = routes;