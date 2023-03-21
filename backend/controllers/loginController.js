const db = require("../dbConnection");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({message: "Username and Password required"});
    }
  
    // VERIFY CREDENTIALS
    const qry = "SELECT * FROM users WHERE username = ? OR email = ?";
  
    db.query(qry, [req.body.username, req.body.username], (err, data) => {
      if (err) {
        return res.status(500).json({code: err.code, errno: err.errno, sqlMessage: err.sqlMessage});
      }
      if (data.length == 0) {
        return res.status(404).json("Wrong UserName or Password");
      }
  
      try {
        const passwordMatch = bcrypt.compareSync(req.body.password, data[0].password);
        if (passwordMatch) {
          // Implement JWT
          return res.status(201).json("Logged In");
        } else {
          return res.status(404).json("Wrong UserName or Password");
        }
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    });
  };
  
  module.exports = loginUser;
  