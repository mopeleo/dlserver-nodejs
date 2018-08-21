/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server_bulletin', {
		id: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		serverid: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(1024),
			allowNull: false
		},
		startdate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		enddate: {
			type: DataTypes.STRING(8),
			allowNull: false
		},
		issuer: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'server_bulletin',
		timestamps: false
	});
};
