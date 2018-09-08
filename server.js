const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const log = require('./config/log4js');
const utils = require('./tools/utils');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const service = require('./services/');

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
