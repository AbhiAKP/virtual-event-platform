const db = require("../dbConnection");
const bcrypt = require("bcrypt");


const registerUser = (req, res) => {
  
  if (!req.body.email || !req.body.password || !req.body.name || !req.body.username) {
    return res.status(400).json({message: "All field are required."});
  }
  
  // CHECK IF USER EXISTS
  const qry = "SELECT * FROM users WHERE username = ? OR email = ?;";

  // Check if username/email already exists
  db.query(qry, [req.body.username, req.body.email], (err, data) => {
    if (err) {
      return res.status(500).json({ code: err.code, errno: err.errno, sqlMessage: err.sqlMessage });
    }
    if (data.length) {
      return res.status(409).json("User already exists.");
    }

      
    // CREATE A NEW USER IF USER DOESN'T EXISTS
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const qry = "INSERT INTO users (`email`, `password`, `name`, `username`) VALUE (?);";
      const values = [
        req.body.email,
        hashedPassword,
        req.body.name,
        req.body.username,
      ];

      db.query(qry, [values], (err, data) => {
        if (err) {
          return res.status(500).json({ code: err.code, errno: err.errno, sqlMessage: err.sqlMessage });
        } else {
          return res.status(200).json("User has beeen created.");
        }
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
};

// const logoutUser = {
//   //TODO
// };

module.exports = registerUser;
