var config = require('./config/config').redis;
var redis = require('redis');

var client = redis.createClient(config.prot, config.host, {});
//如果需要验证，还要进行验证
//client.auth(password, callback);

//redis.print，回调函数，将redis的返回值显示出来。上一句执行结果，将返回“OK”
client.set("string key", "string val", redis.print);
client.get('string key', function(err, value){
    console.log("result : " + value);
})


client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
//遍历哈希表"hash key"
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
});
client.hget("hash key","hashtest 1",redis.print);


/*
两种都可以断掉与redis的连接，
end()很粗暴，不管3721，一下子退出来了，上面那句获取哈希表"hash key"的某个元素值的表达式将没有结果返回
而quit()则是先将语句处理完毕再干净地退出，斯文得很
*/
//client.end();
client.quit();
