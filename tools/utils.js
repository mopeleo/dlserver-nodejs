var log = require('../config/log4js');
var config = require('../config/config').redis;
var redis = require('redis');

var utils = {};

utils.redis = redis.createClient(config.prot, config.host, {});

utils.isJSON = function(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }

        } catch(e) {
            log.error('parse error, param is not json string : ' + str + '! ' + e);
            return false;
        }
    }
    log.info('param is not a string : ' + str)
    return false;
}

utils.checkToken = function(token){
    var promise = new Promise(function(resolve, reject){
        if(!token){
            log.error('token cannot empty!');
            reject();
            return;
        }
        utils.redis.get(token, function(err, val){
            if(!val || val === ''){
                log.error('session is not exist, please login again !');
                reject();
                return;
            }
            log.info("session : " + val);

            var userSession = JSON.parse(val);
            resolve();
        });
    });

    return promise;
}

module.exports = utils;
