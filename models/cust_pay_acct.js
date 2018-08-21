/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cust_pay_acct', {
		acctno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		paytype: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		payno: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'cust_pay_acct',
		timestamps: false
	});
};
