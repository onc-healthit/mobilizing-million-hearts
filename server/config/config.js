module.exports = {
	development: {
		dialect: 'sqlite',
		storage: process.env.DB_STORAGE || '../data/database.sqlite3',
		publicPath: '../public',
		port: '3000',
		logLevel: 'info',
	},
	production: {
		dialect: 'sqlite',
		storage: process.env.DB_STORAGE || '../data/database.sqlite3',
		publicPath: '../public',
		port: '3000',
		logLevel: 'info',
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory',
		publicPath: process.env.DB_STORAGE || '../public',
		port: '3000',
		logLevel: 'info',
	},
};
