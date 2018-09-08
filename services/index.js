var log = require('../config/log4js');
module.exports = function(req, callback){
    var funcid = req.funcid;
    var service = null;
    switch (funcid) {
        case '100000':
            service = require('./cust_info_service');
            break;
        default:
            break;
    }

    if(service == null){
        log.error('未定义的FUNCID : ' + funcid);
        throw new Error('未定义的FUNCID : ' + funcid);
    }
    service.run(req, callback);
}
