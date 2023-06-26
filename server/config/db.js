const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PWD,
    database: process.env.DB_DBNAME
});

console.log(process.env.DB_HOST);

module.exports = db;