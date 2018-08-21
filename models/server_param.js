/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_param', {
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		paramid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		paramvalue: {
			type: DataTypes.STRING(8),
			allowNull: false
		}
	}, {
		tableName: 'server_param',
		timestamps: false
	});
};
