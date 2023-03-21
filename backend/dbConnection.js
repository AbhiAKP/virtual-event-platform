const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password@123",
  database: "database1",
});

module.exports = dbConnection;
