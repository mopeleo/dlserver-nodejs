const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);

const log = require('./config/log4js');
const utils = require('./tools/utils');
const service = require('./services/');

// app.use(session({
//     store: new RedisStore(),            // redis存储session（也可以选择其他store，比如文本文件的'session-file-store'）
//     saveUninitialized: false,           // 是否自动保存未初始化的会话，建议false
//     resave: false,                      // 是否每次都重新保存会话，建议false
//     secret: 'dreamland',                // 用来对session id相关的cookie进行签名,建议使用随机字符串
//     cookie: {
//         maxAge: 30 * 60 * 1000          // 有效期，单位是毫秒,30分钟
//     }
// }));


//登录
app.get('/login', function(req, res, next){
    log.info("--------login begin-------");
    if(req.query){
        req.query.action='login';
        req.query.funcid='100000';
        service(req.query, function(retcode, retmsg, result){
            var returnData = {};
            returnData.retcode = retcode;
            returnData.retmsg = retmsg;
            if(result){
                returnData.result = result;
            }
            var sendString = JSON.stringify(returnData);
            res.send(sendString);
        });
    }else{
        log.error('request query string is not exist!');
        ws.send('{retcode:"9999",retmsg:"request query string is not exist!"}');
    }
    log.info("--------login end-------");
});


server.listen(8000, function() {
    log.info('Listening on %d', server.address().port);
});


wss.on('connection', function(ws) {
    log.info('ws connected');

    ws.on('message', function(msg) {
        log.info('received param : %s', msg);
        if(utils.isJSON(msg)){
            var receivedData = JSON.parse(msg);
            var msgid = receivedData.msgid;
            var type = receivedData.type;
            if (type == 'send') {
                service(receivedData, function(retcode, retmsg, result){
                    if (ws.readyState == WebSocket.OPEN) {
                        var returnData = {};
                        returnData.msgid = msgid;
                        returnData.retcode = retcode;
                        returnData.retmsg = retmsg;
                        if(result){
                            returnData.result = result;
                        }
                        var sendString = JSON.stringify(returnData);
                        ws.send(sendString);
                    }
                });
            }
        }else{
            log.error('error request paramter, must be JSON Object!');
            ws.send('{retcode:"9999",retmsg:"error request paramter, must be JSON Object!"}');
        }
    });

    ws.on('close', (msg)=>{
        log.info('ws closed');
    });
});
