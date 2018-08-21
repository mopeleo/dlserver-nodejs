/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_player_item', {
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
		itemid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		num: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_player_item',
		timestamps: false
	});
};
