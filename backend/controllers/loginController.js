const db = require("../dbConnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: "Username and Password required" });
  }

  // VERIFY CREDENTIALS
  const qry = "SELECT * FROM users WHERE username = ? OR email = ?;";

  db.query(qry, [req.body.username, req.body.username], (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ code: err.code, errno: err.errno, sqlMessage: err.sqlMessage });
    }
    if (data.length == 0) {
      return res.status(404).json("Wrong UserName or Password");
    }

    try {
      const passwordMatch = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (passwordMatch) {
        // Implementing JWT
        const accessToken = jwt.sign(
          { username: req.body.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE_TIME }
        );
        const refreshToken = jwt.sign(
          { username: req.body.username },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE_TIME }
        );

        const qry =
          "UPDATE users SET refreshtoken=? where username=? OR email=?;";
        db.query(
          qry,
          [refreshToken, req.body.username, req.body.username],
          (err, data) => {
            if (err) {
              return res
                .status(500)
                .json({
                  code: err.code,
                  errno: err.errno,
                  sqlMessage: err.sqlMessage,
                });
            }
          }
        );

        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
      } else {
        return res.status(404).json("Wrong UserName or Password");
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
};

module.exports = loginUser;
