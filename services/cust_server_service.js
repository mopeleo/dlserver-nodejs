var log = require('../config/log4js');
var CONST = require('../public/sys_param');
var serverPlayerInfo = require('../models/').ServerPlayerInfo;

var CustServerService = {};

CustServerService.run = function(req, callback){
    switch(req.funcid){
        case "200000":
            CustServerService.getServer(req, callback);
            break;
        case "200001":
            CustServerService.getServerList(req, callback);
            break;
        case "200002":
            CustServerService.getServerActors(req, callback);
            break;
        default:
            log.error("未实现的方法：" + req.funcid);
            throw new Error("未实现的方法：" + req.funcid);
    }
};

//获得客户在具体服务器信息
CustServerService.getServer = function(req, callback){
    serverPlayerInfo.findOne({
        where:{custno: req.custno, serverid: req.serverid}
    }).then(function(res){
        if(res){
            var result = {};
            result.server = res;
            callback(CONST.RETCODE_SUCCESS, 'login success', result);
        }else{
            log.info('客户[' + req.custno + ']未在服务器[' + req.serverid + ']开户');
            callback('200001','客户[' + req.custno + ']未在服务器[' + req.serverid + ']开户');
        }
    }).catch(function (ex) {
        log.info(ex)
    });
}

//获取客户开户服务器列表
CustServerService.getServerList = function(req, callback){

}

//获取客户所在服务器所有角色信息
CustServerService.getServerActors = function(req, callback){

}

module.exports = CustServerService;
