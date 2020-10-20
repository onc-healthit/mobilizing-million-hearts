const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const container = require('./winston');
const routes = require('../rest/routes');
const auditeventService = require('../rest/auditevent/auditevent.service');
const auditeventParameters = require('../rest/auditevent/auditevent.parameters');

const logger = container.get('console');

const stream = {
	write: msg => {
		// Both morgan and winston add a newline, so remove
		logger.info(msg.substring(0, msg.lastIndexOf('\n')));
	},
};

/**
 * An express server wrapper
 * @module Server
 * @description Server classing wrapping express
 */
class Server {
	constructor() {
		// Setup our express app
		this.app = express();

		return this;
	}

	configureMiddleware() {
		// Enable stack traces
		this.app.set('showStackError', true);
		// Enable compression
		this.app.use(compression({ level: 9 }));
		// Enable JSON parsing
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(morgan('tiny', { stream }));

		// Persist AuditEvents for SoF routes
		this.app.use('/', async (req, res, next) => {
			if (req.path === '/launch.html') {
				await auditeventService.create({
					...auditeventParameters.launchRequested,
					requestPath: req.path,
					requestorIp: req.ip,
				});
			}
			next();
		});

		return this;
	}

	configureHelmet() {
		/**
		 * Enable Helmet but not the HSTS functionality
		 * this requires https to be running currently
		 * we are not running in https mode
		 */
		this.app.use(helmet({ hsts: false }));
		return this;
	}

	configureStaticDirectory(publicPath = '') {
		if (publicPath) {
			this.app.use('/', express.static(publicPath));
		}

		return this;
	}

	configureRestRoutes() {
		routes(this.app);

		return this;
	}

	configureErrorRoutes() {
		// If we actually have an error, handle that here
		this.app.use((err, req, res, next) => {
			if (!err) {
				next();
			} else {
				res.status(err.status || 500).json({
					message: err.message || 'Internal Server Error',
					status: err.status || 500,
					type: 'internal-error',
				});
			}
		});

		// Otherwise, trigger a 404
		this.app.use((req, res) => {
			res.status(404).json({
				message: 'Page not found',
				type: 'not-found',
				status: 404,
			});
		});

		return this;
	}

	listen(port, callback) {
		this.app.listen(port, callback);
	}
}

module.exports = Server;
