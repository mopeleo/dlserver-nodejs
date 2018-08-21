/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_player_friend', {
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
		friendlist: {
			type: DataTypes.STRING(2048),
			allowNull: false
		},
		friendnum: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_player_friend',
		timestamps: false
	});
};
