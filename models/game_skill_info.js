/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_skill_info', {
		skillid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		skillname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		type: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		remark: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'game_skill_info',
		timestamps: false
	});
};
