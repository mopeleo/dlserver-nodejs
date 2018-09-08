var CustInfo = require('./models/').CustInfo;
var sequelize = require('./models/').sequelize;
// var CustInfoService = require('./services/CustInfoService');
var func = require('./services/');
var log = require('./config/log4js');
var test = require('./tools/test');
// // 查询
// CustInfo.findOne({
//     where:{custno: 1}
// }).then(function (res) {
//     console.log(JSON.stringify(res))
// }).catch(function (ex) {
//     console.log(ex)
// });
// // 更改
// var param = {'email': 'test@126.com'};
// CustInfo.update(param,{
//     where: {custno: 1}
// });
// // 添加
// CustInfo.create({
//     custno: 6,
//     salt:'6',
//     loginpwd: '54dsf54sdf4',
//     email:'test@126.com',
// 	mobile:'13313453459',
// 	idtype:'1',
//     nickname: '4'
// });
// // 删除
// CustInfo.destroy({where: {custno: 6}});
// sql
// sequelize.query('SELECT * FROM cust_info c,cust_info_ext x where c.custno=x.custno and c.custno=1').spread((results, metadata) => {
//     // 每个记录现在将是Project的一个实例
//     console.log("custno 3' email is : " + results[0].email);
//     console.log("results select : " + results);
//     console.log("metadate select : " + metadata);
// })
// sequelize.query('update cust_info set email="cust2@163.com" where custno=2').spread((results, metadata) => {
//     // 每个记录现在将是Project的一个实例
//     console.log("results update : " + results);
//     console.log("========== update custno 2 ======");
//     console.log("metadate update : " + metadata);
// })

//1 = c4ca4238a0b923820dcc509a6f75849b
//CustInfoService.login({custno: 1, pwd: "c4ca4238a0b923820dcc509a6f75849b"});

//var t = new CustInfoService({action:"login",custno: 1, pwd: "c4ca4238a0b923820dcc509a6f75849b"});

func("100000", {action:"login",custno: 1, pwd: "c4ca4238a0b923820dcc509a6f75849b"},(data)=>{
    log.info(data);
});

// log.info("info");
// log.error("error1");
// log.info(func);

