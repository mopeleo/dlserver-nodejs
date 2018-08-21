module.exports = function(funcid, req, callback){

    switch (funcid) {
        case "100000":
            var custInfoService = require("./CustInfoService");
            custInfoService(req, callback);
            break;
        default:
            break;
    }
}
