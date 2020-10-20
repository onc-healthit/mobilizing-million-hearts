module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('AuditEvents', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			content: {
				type: Sequelize.TEXT,
			},
			encounter: {
				type: Sequelize.STRING,
			},
			patient: {
				type: Sequelize.STRING,
			},
			user: {
				type: Sequelize.STRING,
			},
			tenant: {
				type: Sequelize.STRING,
			},
			requestPath: {
				type: Sequelize.STRING,
			},
			requestorIp: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('AuditEvents');
	},
};
