const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const container = require('./lib/winston');
const Server = require('./lib/express');

const env = process.env.NODE_ENV || 'development';

const config = require(`${__dirname}/../config/config.json`)[env];

const auditeventService = require('./rest/auditevent/auditevent.service');
const { serverStarted } = require('./rest/auditevent/auditevent.parameters');

const startupAuditEvent = {
	name: serverStarted.name,
	description: serverStarted.description,
};

const appName = 'Mobilizing Million Hearts';

console.log('Environment:', env);

/**
 * @name exports
 * @static
 * @summary Setup server and start the application
 * @function main
 */
module.exports = function main() {
	const { port: portConfig, publicPath } = config;
	const logger = container.get('console');

	logger.info(`Initializing ${appName}`);

	const fullPath = path.resolve(__dirname, publicPath);

	logger.info(`App path ${publicPath}`);

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
