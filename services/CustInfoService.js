var crypto = require('crypto');
var CustInfo = require('../models/').CustInfo;

var CustInfoService = function(req, callback){
    if(!req){
        throw new Error('入参不能为空');
    }
    console.log("action : " + req.action);
    if(req.action){
        switch(req.action){
            case "login":
                CustInfoService.login(req, callback);
                break;
            case "":
                break;
            default:
                throw new Error("未实现的方法：" + req.action);
        }
    }else{
        CustInfoService.run(req, callback);
    }
};

CustInfoService.login = function(req, callback){
    console.log("CustInfoService.login param : " + JSON.stringify(req));
    CustInfo.findOne({
        where:{custno: req.custno}
    }).then(function (res) {
        var saltPwd = res.salt + req.pwd;
        var md5 = crypto.createHash('md5');
        var md5Pwd = md5.update(saltPwd).digest('hex');
        console.log("after add salt : " + md5Pwd);
        if(md5Pwd == res.loginpwd){
            console.log("login success");
            console.log(JSON.stringify(res))
        }else{
            console.log("error password");
        }
    }).catch(function (ex) {
        console.log(ex)
    });
};

module.exports = CustInfoService;
