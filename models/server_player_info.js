/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_player_info', {
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		nickname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		logindate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		logintime: {
			type: DataTypes.STRING(6),
			allowNull: false
		},
		playerlevel: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		viplevel: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		crystal: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_player_info',
		timestamps: false
	});
};
