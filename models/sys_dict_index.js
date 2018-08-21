/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_dict_index', {
		dictcode: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		dictname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		dftitem: {
			type: DataTypes.STRING(8),
			allowNull: true
		}
	}, {
		tableName: 'sys_dict_index',
		timestamps: false
	});
};
