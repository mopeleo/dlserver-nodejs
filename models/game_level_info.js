/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_level_info', {
		levelid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		levelname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		nextlevel: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		icon: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		minpoint: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		maxpoint: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		remark: {
			type: DataTypes.STRING(256),
			allowNull: true
		}
	}, {
		tableName: 'game_level_info',
		timestamps: false
	});
};
