const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const log = require('./config/log4js');
const utils = require('./tools/utils');
const service = require('./services/');


//登录
app.get('/login', function(req, res, next){
    log.info("--------login begin-------");
    if(req.query){
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
        res.send('{retcode:"9999",retmsg:"request query string is not exist!"}');
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

            utils.checkToken(receivedData.token).then(function(){
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
            }, function(){
                ws.send('{retcode:"999998",retmsg:"error token, please login again !"}');
                ws.close();
            });

        }else{
            log.error('error request paramter, must be JSON Object!');
            ws.send('{retcode:"999999",retmsg:"error request paramter, must be JSON Object!"}');
        }
    });

    ws.on('close', (msg)=>{
        log.info('ws closed');
    });
});
