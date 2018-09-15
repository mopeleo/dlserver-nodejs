var crypto = require('crypto');
var log = require('../config/log4js');
var redis = require('../tools/utils').redis;
var CONST = require('../public/sys_param');
var UserSession = require('../public/user_session');
var custInfo = require('../models/').CustInfo;

var CustInfoService = {};

CustInfoService.run = function(req, callback){
    switch(req.funcid){
        case "100000":
            CustInfoService.login(req, callback);
            break;
        case "":
            break;
        default:
            log.error("未实现的方法：" + req.funcid);
            throw new Error("未实现的方法：" + req.funcid);
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

            //登录成功，缓存session
            var usession = new UserSession();
            for(var p in usession){
                if(res[p]){
                    usession[p] = res[p];
                }
            }
            var sessionid = usession.getSessionId();
            redis.set(sessionid, JSON.stringify(usession));

            var result = {};
            result.token = sessionid;
            callback(CONST.RETCODE_SUCCESS, 'login success', result);
        }else{
            log.info("error password");
            callback('100001','login failure');
        }
    }).catch(function (ex) {
        log.info(ex)
    });

};

module.exports = CustInfoService;
