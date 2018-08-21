/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_msg_send', {
		msgid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		custno: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		content: {
			type: DataTypes.STRING(1024),
			allowNull: false
		},
		type: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		receiver: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0'
		},
		senddate: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		sendtime: {
			type: DataTypes.STRING(6),
			allowNull: true
		}
	}, {
		tableName: 'server_msg_send',
		timestamps: false
	});
};
