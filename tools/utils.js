var log = require('../config/log4js');
var config = require('../config/config').redis;
var redis = require('redis');

var utils = {};

utils.isJSON = function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }

        } catch(e) {
            log.error('parse error, param is not json string : ' + str + '! '+e);
            return false;
        }
    }
    log.info('param is not a string : ' + str)
    return false;
}

utils.redis = redis.createClient(config.prot, config.host, {});

module.exports = utils;
