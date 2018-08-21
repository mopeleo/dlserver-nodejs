/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_meun_info', {
		menuid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		menuname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'game_meun_info',
		timestamps: false
	});
};
