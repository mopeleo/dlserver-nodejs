/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('forum_article', {
		artid: {
			type: DataTypes.CHAR(32),
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		author: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		content: {
			type: DataTypes.STRING(2048),
			allowNull: false
		},
		pubflag: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		pubdate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		pubtime: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		lastreplydate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		lastreplytime: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		readtimes: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		replytimes: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		topflag: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		checkflag: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		checker: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		closeflag: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		closer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'forum_article',
		timestamps: false
	});
};
