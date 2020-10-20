const { AuditEvent } = require('../../models');
const container = require('../../lib/winston');

const logger = container.get('console');

exports.create = async (auditevent) => {
	let results;
	let err;
	try {
		results = await AuditEvent.create(auditevent);
	} catch (e) {
		logger.info(e);
		err = e;
	}
	return [results, err];
};
