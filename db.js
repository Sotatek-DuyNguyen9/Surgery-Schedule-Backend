const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "duy123456",
  database: "surgery_db",
});

module.exports = mysqlPool;
