var log = require('../config/log4js');

module.exports = function(req, callback){
    if(!req){
        log.error('入参不能为空');
        throw new Error('入参不能为空');
    }
    if(!req.funcid || req.funcid.length != 6){
        log.error('未定义的FUNCID : ' + req.funcid);
        throw new Error('未定义的FUNCID : ' + req.funcid);
    }
    log.info("funcid : " + req.funcid);
    var service = null;
    var sid = req.funcid.substring(0, 3);
    switch (sid) {
        case '100':
            service = require('./cust_info_service');
            break;
        case '200':
            service = require('./cust_server_service');
            break;
        default:
            break;
    }

    if(service == null){
        log.error('未定义的FUNCID : ' + req.funcid);
        throw new Error('未定义的FUNCID : ' + req.funcid);
    }
    service.run(req, callback);
}
