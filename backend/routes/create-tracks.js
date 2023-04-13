const express = require("express");
const routes = express.Router();
const db = require("../dbConnection");
const verifyJWT = require("../middleware/verifyJWT");

routes.post('/', verifyJWT, (req, res) => {
    const data = req.body;
    let values = [];
    
    let sql = "INSERT INTO course_tracks (course_id, track_title, track_desc, track_date, track_link) VALUES ?";

    for (let i = 0; i < data.length; i++) {
      values.push([data[i].course_id, data[i].track_title, data[i].track_desc, data[i].track_date, data[i].track_link]);
    }

    db.query(sql, [values], (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Error inserting data into course_tracks table', sqlMessage: `${err}` });
          } else {
            res.status(201).json({ message: 'Data inserted into course_tracks table' });
          }
    });
  });

  
module.exports = routes;