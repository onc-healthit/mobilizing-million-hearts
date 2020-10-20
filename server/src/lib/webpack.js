/* eslint-disable */

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const container = require('./winston.js.js');
const webpackDevServerConfig = require('../config/webpack.dev-server.js');

const logger = container.get('console');

const toStringOptions = {
	errorDetails: true,
	warnings: true,
	modules: false,
	chunks: false,
	colors: true,
};

/**
 * @function compileStaticAssets
 * @param {object} webpackConfig - Webpack configurations
 */
const compileStaticAssets = () =>
	new Promise((resolve, reject) => {
		logger.info('Compiling our static assets.');
		const config = require('../config/webpack.precompile.js')();
		const compiler = webpack(config);

		compiler.run((err, stats) => {
			if (err) {
				return reject(err);
			}

			console.log(`\n${stats.toString(toStringOptions)}\n`);
			resolve();
		});
	});

/**
 * @function compile
 * @param {object} config - Webpack configurations
 */
const compile = config =>
	new Promise((resolve, reject) => {
		// Compile our static router first, we need this since we want server side
		// rendering with the React Router
		return compileStaticAssets()
			.then(() => {
				logger.info('Compiling our production assets.');
				const compiler = webpack(config);

				compiler.run((err, stats) => {
					if (err) {
						return reject(err);
					}

					console.log(`\n${stats.toString(toStringOptions)}\n`);
					resolve();
				});
			})
			.catch(reject);
	});

/**
 * @function middleware
 * @param {object} config - Webpack configurations
 */
function middleware(config) {
	const compiler = webpack(config);
	return {
		webpackDevMiddleware: webpackDevMiddleware(compiler, webpackDevServerConfig),
		webpackHotMiddleware: webpackHotMiddleware(compiler),
	};
}

/**
 * @function parseAssetPaths
 * @description Parse assets from a stats.json entry. We use a plugin to write
 * out a stats file and the assetsByChunkName can either be an array or can be
 * a string. If it's an array, it contains the path to our critical css and js
 */
function parseAssetPaths(asset) {
	// If we have an array, locate the js and css assets
	if (Array.isArray(asset)) {
		// This may not exist
		const cssIndex = asset.findIndex(str => str.endsWith('css'));
		// This will always find something
		const jsIndex = asset.findIndex(str => str.endsWith('js'));

		return { cssPath: asset[cssIndex] || '', jsPath: asset[jsIndex] };
	}
	// First load with HMR, asset is a string, we never have css assets in dev
	// Also, Common module in production is also a string
	// Also Also, this is the default case
	return { cssPath: '', jsPath: asset };
}

module.exports = {
	parseAssetPaths,
	middleware,
	compile,
};
