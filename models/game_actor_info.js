/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_actor_info', {
		actorid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true
		},
		actorname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		aptitude: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		attack: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		defense: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		hp: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		mp: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		ep: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		initrank: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		maxrank: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		attr: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'game_actor_info',
		timestamps: false
	});
};
