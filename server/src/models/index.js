const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];

class Database {
	constructor() {
		this.models = [];
		const sequelize = new Sequelize(config.database, config.username, config.password, config);
		fs.readdirSync(__dirname)
			.filter(file => {
				return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
			})
			.forEach(file => {
				const model = sequelize.import(path.join(__dirname, file));
				this[model.name] = model;
				this.models.push(model.name);
			});

		this.models.forEach(modelName => {
			if (this[modelName].associate) {
				this[modelName].associate(this);
			}
		});

		this.sequelize = sequelize;
	}
}

module.exports = new Database();
