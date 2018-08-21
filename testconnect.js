var connect = require("./tools/dbconnect");
connect.connect();

connect.query("select * from cust_info", function(err, rows, fields){
    for(var row of rows){
        var result = "";
        for(var field of fields){
            result += " " + row[field.name]
        }

        console.log(result);
    }
});

connect.end();

