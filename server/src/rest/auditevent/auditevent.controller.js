const service = require('./auditevent.service');
const container = require('../../lib/winston');

const logger = container.get('console');

exports.create = async (req, res, next) => {
	logger.info('Create >>> AuditEvent');

	const requestorIp = req.ip;

	const [results, err] = await service.create({
		...req.body,
		requestorIp,
	});

	if (err) {
		next(err);
	} else {
		res.json(results);
	}
};
