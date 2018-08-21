/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_scene_info', {
		sceneid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		scenename: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'game_scene_info',
		timestamps: false
	});
};
