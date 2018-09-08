var crypto = require('crypto');
var custInfo = require('../models/').CustInfo;
var log = require('../config/log4js');
var CONST = require('../config/sysparam');

var CustInfoService = {};

CustInfoService.run = function(req, callback){
    if(!req){
        throw new Error('入参不能为空');
    }
    log.info("action : " + req.action);
    switch(req.action){
        case "login":
            CustInfoService.login(req, callback);
            break;
        case "":
            break;
        default:
            log.error("未实现的方法：" + req.action);
            throw new Error("未实现的方法：" + req.action);
    }
};

CustInfoService.login = function(req, callback){
    log.info("CustInfoService.login param : " + JSON.stringify(req));
    custInfo.findOne({
        where:{custno: req.custno}
    }).then(function (res) {
        var saltPwd = res.salt + req.pwd;
        var md5 = crypto.createHash('md5');
        var md5Pwd = md5.update(saltPwd).digest('hex');
        log.info("after add salt : " + md5Pwd);
        if(md5Pwd == res.loginpwd){
            log.info("login success");
            log.info(JSON.stringify(res))
            callback(CONST.RETCODE_SUCCESS, 'login success');
        }else{
            log.info("error password");
            callback('0001','login failure');
        }
    }).catch(function (ex) {
        log.info(ex)
    });

};

module.exports = CustInfoService;
