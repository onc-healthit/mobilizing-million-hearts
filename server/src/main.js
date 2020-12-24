const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const container = require('./lib/winston');
const Server = require('./lib/express');

const env = process.env.NODE_ENV || 'development';

const config = require(`${__dirname}/../config/config.js`)[env];

const auditeventService = require('./rest/auditevent/auditevent.service');
const { serverStarted } = require('./rest/auditevent/auditevent.parameters');

const logger = container.get('console');

const startupAuditEvent = {
	name: serverStarted.name,
	description: serverStarted.description,
};

const appName = 'Mobilizing Million Hearts';

logger.info(`Environment: ${env}`);

/**
 * @name exports
 * @static
 * @summary Setup server and start the application
 * @function main
 */
module.exports = function main() {
	const { port: portConfig, publicPath, storage } = config;

	logger.info(`Initializing ${appName}`);

	logger.info(`Database location: ${path.resolve(__dirname, storage)}`);

	const fullPath = path.join(__dirname, publicPath);

	logger.info(`Public path ${fullPath}`);

	const server = new Server()
		.configureMiddleware()
		.configureStaticDirectory(fullPath)
		.configureRestRoutes()
		.configureErrorRoutes();

	const port = args.p ? args.p : portConfig;

	server.listen(port, async () => {
		logger.info(`Server listening on port ${port}`);
		await auditeventService.create(startupAuditEvent);
	});
};
