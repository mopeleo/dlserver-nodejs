/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_msg_receive', {
		msgid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true
		},
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		isread: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'server_msg_receive',
		timestamps: false
	});
};
