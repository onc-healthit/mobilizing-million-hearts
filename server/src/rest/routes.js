const express = require('express');
const glob = require('glob');
const path = require('path');
const container = require('../lib/winston');

const logger = container.get('console');

module.exports = app => {
	// Base api route
	const base = '/api';

	// Create a router for this instance
	const router = new express.Router();

	// Locate all the available routes in rest & graphql
	const routes = glob.sync('**/*.routes.js', { cwd: __dirname });

	// Pass the router to each route for them to setup themselves
	routes.forEach(route => {
		logger.info(`Registering ${route}`);
		require(path.join(__dirname, route))(router);
	});

	// Register the base route with all the routes associated with the router
	app.use(base, router);
};
