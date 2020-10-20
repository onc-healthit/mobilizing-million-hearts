const { Container, transports, format } = require('winston');

// Create our default logging container
const container = new Container();

// Create a console transport and add it to the container
const transportConsole = new transports.Console({
	timestamp: true,
	colorize: true,
	level: 'debug',
	format: format.combine(format.colorize(), format.simple()),
});

container.add('console', {
	transports: [transportConsole],
});

/**
 * @name exports
 * @static
 * @summary Logging container for the application
 */
module.exports = container;
