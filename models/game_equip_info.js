/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_equip_info', {
		equipid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		equipname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		position: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		rank: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		remark: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'game_equip_info',
		timestamps: false
	});
};
