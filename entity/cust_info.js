var pool = require("../tools/dbpool");

var CustInfo = function(){
    this.custno = 0;
    this.loginpwd = "";
    this.salt = "";
    this.nickname = "";
    this.status = "";
    this.level = "";
    this.idtype = "";
    this.idcode = "";
    this.idname = "";
    this.email = "";
    this.mobile = "";
    this.regdate = "";
    this.lastlogindate = "";
    this.lastlogintime = "";
}

CustInfo.getById = function(reqObj, callback){
    var cust = new CustInfo();
    pool.query("select * from cust_info where custno = ?",[reqObj.custno], function(err, rows, fields){
        if(rows && rows.length > 0){
            callback(rows[0]);
        }
    });
}

CustInfo.query = function(reqObj){
    var userList = [];

    return userList;
}

module.exports = CustInfo;
