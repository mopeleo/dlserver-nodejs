/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cust_info', {
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		loginpwd: {
			type: DataTypes.CHAR(32),
			allowNull: false
		},
		salt: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		nickname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		status: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		level: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		idtype: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		idcode: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		idname: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		mobile: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		regdate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		lastlogindate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		lastlogintime: {
			type: DataTypes.STRING(6),
			allowNull: true
		}
	}, {
		tableName: 'cust_info',
		timestamps: false
	});
};
