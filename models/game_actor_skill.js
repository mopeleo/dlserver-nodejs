/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_actor_skill', {
		actorid: {
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
		tableName: 'game_actor_skill',
		timestamps: false
	});
};
