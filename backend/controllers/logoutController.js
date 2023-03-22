const db = require("../dbConnection");

const handleLogout = (req, res) => {
  // TODO - Front_End Task -> Clear the Access Token from the memory
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401); // No content containing jwt
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
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.sendStatus(403);
    }

    // Delete refreshToken from Database
    const qry = "UPDATE users SET refreshtoken=? where username=? OR email=?;";
    db.query(qry, [null, req.body.username, req.body.username], (err, data) => {
      if (err) {
        return res.status(500).json({
          code: err.code,
          errno: err.errno,
          sqlMessage: err.sqlMessage,
        });
      }
    });
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.end("Logged Out Successfully");
  });
};

module.exports = handleLogout;
