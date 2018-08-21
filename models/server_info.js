/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_info', {
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		servername: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		opendate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		opentime: {
			type: DataTypes.STRING(6),
			allowNull: false
		},
		maxplayer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		regplayer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		onlineplayer: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_info',
		timestamps: false
	});
};
