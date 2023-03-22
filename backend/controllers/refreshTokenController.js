const db = require("../dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }


  const refreshToken = cookies.jwt;

  // VERIFY IF REFRESH TOKEN CORRESPONDS TO ANY USER IN THE DATABASE
  const qry = "SELECT * FROM users WHERE refreshtoken=?;";

  db.query(qry, refreshToken, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ code: err.code, errno: err.errno, sqlMessage: err.sqlMessage });
    }
    if (data.length == 0) {
      return res.sendStatus(403); // Forbidden
    }

    // Evaluate JWT
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || (data[0].username !== decoded.username && data[0].email !== decoded.username)) {
          return res.sendStatus(403); // Forbidden
        }

        const accessToken = jwt.sign(
          { username: decoded.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE_TIME }
        );
        res.json({ accessToken });
      }
    );
  });
};

module.exports = handleRefreshToken;
