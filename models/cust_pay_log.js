/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cust_pay_log', {
		logid: {
			type: DataTypes.CHAR(32),
			allowNull: false,
			primaryKey: true
		},
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		acctno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		direction: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		amt: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		otheracct: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		paytype: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		paydate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		paytime: {
			type: DataTypes.STRING(6),
			allowNull: false
		},
		summary: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		tableName: 'cust_pay_log',
		timestamps: false
	});
};
