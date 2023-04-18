const express = require("express");
const db = require("../dbConnection");
const jwt = require("jsonwebtoken");
const verifyJWT = require("../middleware/verifyJWT");

const routes = express.Router();
const APP_SECRET_KEY =
  "aa49992bc78f52f2c8b520a917c47f24b8775a3fa6fa30dea6b3884fd35f2f27237d6fffba166601d5098113c3eb617c1f7289357741478cd8600824d68b2d3f";
const JITSI_DOMAIN = "localhost:8443";

routes.get("/track/:trackMeetId", verifyJWT, async (req, res) => {
  const { trackMeetId } = req.params;
  let course_id;
  try {
    // Check if the current user is the instructor.
    const qry =
      "SELECT * FROM courses JOIN course_tracks ON courses.id = course_tracks.course_id WHERE track_link_id = ? AND user_name = ?";
    const values = [trackMeetId, req.user];

    db.query(qry, values, (error, results) => {
      if (error) {
        // Handle the error
        return res.status(500).json({ error: "Internal Server Error" });
      }

      course_id = results.course_id;
      if (results.length === 0) {
        // Check if user is an attendee
        const query = `SELECT * FROM users JOIN enrollments ON users.id = enrollments.user_id WHERE users.username = ? AND enrollments.course_id = ?`;
        db.query(query, [req.user, course_id], (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error while fetching enrollments data" });
          }

          if (result.length == 0) {
            return res.json({ success: false, course_id });
          } else {
            try {
              const token = jwt.sign(
                {
                  sub: req.user,
                  room: trackMeetId,
                  role:
                    results[0].user_name === req.user ? "instructor" : "participant",
                },
                APP_SECRET_KEY,
                {
                  expiresIn: "1h",
                  issuer: "my_app",
                  audience: "jitsi",
                }
              );
        
              const jitsiUrl = `https://${JITSI_DOMAIN}/${trackMeetId}?jwt=${token}`;
        
              return res.json({ success: true, jitsiUrl });
            } catch (error) {
              console.error("Error generating Jitsi-Meet URL:", error);
              // redirect back to the course page using the course_id if the authentication fails
              return res.json({ success: false, course_id });
            }
          }
        });
      }

      // User is enrolled in the course
      const token = jwt.sign(
        {
          sub: req.user,
          room: trackMeetId,
          role:
            results[0].user_name === req.user ? "instructor" : "participant",
        },
        APP_SECRET_KEY,
        {
          expiresIn: "1h",
          issuer: "my_app",
          audience: "jitsi",
        }
      );

      const jitsiUrl = `https://${JITSI_DOMAIN}/${trackMeetId}?jwt=${token}`;

      return res.json({ success: true, jitsiUrl });
    });
  } catch (error) {
    console.error("Error generating Jitsi-Meet URL:", error);
    // redirect back to the course page using the course_id if the authentication fails
    return res.json({ success: false, course_id });
  }
});

module.exports = routes;
