/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_league_info', {
		leagueid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		leaguename: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		maxleaguer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		level: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		creator: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		createdate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		createtime: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		remark: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'server_league_info',
		timestamps: false
	});
};
