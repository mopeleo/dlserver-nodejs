var pool = require("./tools/dbpool");
var CustInfo = require("./entity/cust_info");

var user = new CustInfo();
user.custno = 2;
CustInfo.getById(user, function(result){
    console.log("test's nickname is : " + result.nickname);
});

console.log("new s1:");
var s1 = new CustInfo();
s1.userid = "s1";
console.log("s1.userid:" + s1.userid);
console.log("new s2:");
var s2 = new CustInfo();

console.log(s1 === s2);
console.log(s1.select === s2.select);


pool.getConnection(function(err, conn){
    if(err){
        console.log("err is : " + err);
    }else{
        conn.query("select * from cust_info where custno = 1", function(err, rows, fields){
            for(var row of rows){
                var result = "";
                for(var field of fields){
                    result += " " + row[field.name]
                }

                console.log(result);
            }
        });
    }
});

