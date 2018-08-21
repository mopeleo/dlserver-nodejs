/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_scene_menu', {
		sceneid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		menuid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'game_scene_menu',
		timestamps: false
	});
};
