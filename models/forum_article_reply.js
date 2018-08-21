/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('forum_article_reply', {
		artid: {
			type: DataTypes.CHAR(32),
			allowNull: false,
			primaryKey: true
		},
		replyid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		content: {
			type: DataTypes.STRING(1024),
			allowNull: false
		},
		replyer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		replydate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		replytime: {
			type: DataTypes.STRING(6),
			allowNull: false
		}
	}, {
		tableName: 'forum_article_reply',
		timestamps: false
	});
};
