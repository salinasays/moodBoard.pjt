const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

var User = sequelizeConnection.define('user', {
	username: {
		type: Sequelize.STRING,
		required: true,
		validate: {
			len: [5, 15]
		}
	},
	email: {
		type: Sequelize.STRING,
		required: true,
		validate: {
			isEmail: true,
		}
	},
	password: {
		type: Sequelize.STRING,
		required: true,
		validate: {
			len: [5, 15]
		}
	}
})

// User.sync()

module.exports = User;