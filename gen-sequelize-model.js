var SequelizeAuto = require('sequelize-auto')
var dbconfig = require('./config/config').mysql;
var auto = new SequelizeAuto(dbconfig.database, dbconfig.user, dbconfig.password,
    {
        host: dbconfig.host,
        port: dbconfig.port,
        dialect: dbconfig.dialect,
        directory: './models', // prevents the program from writing to disk
        additional: {
            timestamps: false
            //...
        }
    }
)
auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});
