/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_dict_value', {
		dictcode: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		itemcode: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		itemvalue: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'sys_dict_value',
		timestamps: false
	});
};
