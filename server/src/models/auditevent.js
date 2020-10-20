module.exports = (sequelize, DataTypes) => {
	const AuditEvent = sequelize.define(
		'AuditEvent',
		{
			name: DataTypes.STRING,
			description: DataTypes.TEXT,
			content: DataTypes.TEXT,
			requestPath: DataTypes.STRING,
			requestorIp: DataTypes.STRING,
			encounter: DataTypes.STRING,
			patient: DataTypes.STRING,
			user: DataTypes.STRING,
			tenant: DataTypes.STRING,
		},
		{}
	);
	AuditEvent.associate = () => {
		// associations can be defined here
	};
	return AuditEvent;
};
