/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_promotion_info', {
		promid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		promname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		remark: {
			type: DataTypes.STRING(256),
			allowNull: true
		}
	}, {
		tableName: 'game_promotion_info',
		timestamps: false
	});
};
