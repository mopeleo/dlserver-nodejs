/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_equip_skill', {
		equipid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		skillid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'game_equip_skill',
		timestamps: false
	});
};
