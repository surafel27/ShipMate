const mysql = require('mysql');
const config = require("./main.config.js");

//DataBase connection
const databaseConfig = config.database;
const db = mysql.createConnection({
    user: databaseConfig.user,
    host: databaseConfig.host,
    password: databaseConfig.password,
    database: databaseConfig.database,
    insecureAuth: true,
});

module.exports = db;