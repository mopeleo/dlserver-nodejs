/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_player_actor', {
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
		actorid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		rank: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		level: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_player_actor',
		timestamps: false
	});
};
