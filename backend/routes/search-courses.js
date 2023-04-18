const express = require("express");
const db = require("../dbConnection");
const verifyJWT = require("../middleware/verifyJWT");

const routes = express.Router();

routes.get('/search', verifyJWT, async (req, res) => {
  try {
    const { keywords } = req.query;

    const results = await new Promise((resolve, reject) => {
      const qry = `SELECT id, course_name, course_desc, course_img FROM courses WHERE MATCH(course_keywords, course_name, course_desc, category, subcategory, course_objective_text) AGAINST(? IN BOOLEAN MODE)`;

      db.query(qry, [keywords], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching courses');
  }
});

module.exports = routes;