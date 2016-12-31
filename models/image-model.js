 const Sequelize = require('sequelize');
 const sequelizeConnection = require('../db');
 const Board = require('./board-model');

 var Image = sequelizeConnection.define('image', {
 	image_url: {
 		type: Sequelize.STRING,
	 	required: true,
 		validate: {
	 		isURL: true,
	 	}
 	}
 })

 // Image.sync()

 module.exports = Image;
