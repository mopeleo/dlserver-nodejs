/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cust_info_ext', {
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		birthday: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		profession: {
			type: DataTypes.STRING(8),
			allowNull: true
		}
	}, {
		tableName: 'cust_info_ext',
		timestamps: false
	});
};
