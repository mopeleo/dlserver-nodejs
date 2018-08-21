/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_param', {
		paramid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		paramname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		paramvalue: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		initvalue: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		remark: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'sys_param',
		timestamps: false
	});
};
