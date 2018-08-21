/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_promotion', {
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		promid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		startdate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		starttime: {
			type: DataTypes.STRING(6),
			allowNull: false
		},
		enddate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		endtime: {
			type: DataTypes.STRING(6),
			allowNull: false
		}
	}, {
		tableName: 'server_promotion',
		timestamps: false
	});
};
