var mysql = require("mysql");
var dbconfig = require("../config/config").mysql;

var connection = mysql.createConnection({
    host: dbconfig.host,
    port: dbconfig.port,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
});

module.exports = connection;
