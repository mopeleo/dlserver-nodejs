function UserSession(){
    this.custno = null;
    this.nickname = null;
    this.status = null;
    this.level = null;
}

UserSession.prototype.getSessionId = function(){
    // 获取当前时间戳(以s为单位)
    var timestamp = Date.parse(new Date())/1000;
    return this.custno + '_' + timestamp + '' + Math.round(Math.random() * 10000);
}

module.exports = UserSession;
