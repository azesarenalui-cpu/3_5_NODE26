const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"",
    database: "ui_3_3_26"
})

module.exports = conn;