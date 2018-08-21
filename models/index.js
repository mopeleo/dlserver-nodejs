
var Sequelize = require('sequelize');
var dbconfig = require('../config/config').mysql;
// 创建数据库连接
var sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
    host: dbconfig.host,
    port: dbconfig.port,
    dialect: dbconfig.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})
// 数据库模型名称及路径
const models =[
    {
        "name": "CustInfo",
        "path": "./cust_info.js"
    },
    {
        "name": "CustInfoExt",
        "path": "./cust_info_ext.js"
    },
    {
        "name": "CustPayAcct",
        "path": "./cust_pay_acct.js"
    },
    {
        "name": "CustPayLog",
        "path": "./cust_pay_log.js"
    },
    {
        "name": "ForumArticle",
        "path": "./forum_article.js"
    },
    {
        "name": "ForumArticleReply",
        "path": "./forum_article_reply.js"
    },
    {
        "name": "GameActorInfo",
        "path": "./game_actor_info.js"
    },
    {
        "name": "GameActorSkill",
        "path": "./game_actor_skill.js"
    },
    {
        "name": "GameEquipInfo",
        "path": "./game_equip_info.js"
    },
    {
        "name": "GameEquipSkill",
        "path": "./game_equip_skill.js"
    },
    {
        "name": "GameItemInfo",
        "path": "./game_item_info.js"
    },
    {
        "name": "GameLevelInfo",
        "path": "./game_level_info.js"
    },
    {
        "name": "GameMeunInfo",
        "path": "./game_meun_info.js"
    },
    {
        "name": "GamePromotionInfo",
        "path": "./game_promotion_info.js"
    },
    {
        "name": "GameSceneInfo",
        "path": "./game_scene_info.js"
    },
    {
        "name": "GameSceneMenu",
        "path": "./game_scene_menu.js"
    },
    {
        "name": "GameSkillInfo",
        "path": "./game_skill_info.js"
    },
    {
        "name": "ServerBulletin",
        "path": "./server_bulletin.js"
    },
    {
        "name": "ServerInfo",
        "path": "./server_info.js"
    },
    {
        "name": "ServerLeagueInfo",
        "path": "./server_league_info.js"
    },
    {
        "name": "ServerMsgReceive",
        "path": "./server_msg_receive.js"
    },
    {
        "name": "ServerMsgSend",
        "path": "./server_msg_send.js"
    },
    {
        "name": "ServerParam",
        "path": "./server_param.js"
    },
    {
        "name": "ServerPlayerActor",
        "path": "./server_player_actor.js"
    },
    {
        "name": "ServerPlayerFriend",
        "path": "./server_player_friend.js"
    },
    {
        "name": "ServerPlayerInfo",
        "path": "./server_player_info.js"
    },
    {
        "name": "ServerPlayerItem",
        "path": "./server_player_item.js"
    },
    {
        "name": "ServerPromotion",
        "path": "./server_promotion.js"
    },
    {
        "name": "SysDictIndex",
        "path": "./sys_dict_index.js"
    },
    {
        "name": "SysDictValue",
        "path": "./sys_dict_value.js"
    },
    {
        "name": "SysParam",
        "path": "./sys_param.js"
    }
]
// 数据模型输出
module.exports["sequelize"] = sequelize;
models.forEach(item => {
    module.exports[item.name] = require(item.path)(sequelize, Sequelize)
})
