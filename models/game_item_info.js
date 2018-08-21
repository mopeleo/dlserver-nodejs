/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_item_info', {
		itemid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		itemname: {
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
		tableName: 'game_item_info',
		timestamps: false
	});
};
