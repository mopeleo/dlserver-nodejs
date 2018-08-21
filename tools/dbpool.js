var mysql = require("mysql");
var dbconfig = require("../config/config").mysql;

console.log("========create pool begin=======");
var dbpool = mysql.createPool({
    connectionLimit: 10,
    host: dbconfig.host,
    port: dbconfig.port,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
});
console.log("========create pool end=======");

module.exports = dbpool;
