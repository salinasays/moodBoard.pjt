 const Sequelize = require('sequelize');
 const sequelizeConnection = require('../db');
 const User = require('./user-model');
 const Image = require('./image-model')

var Board = sequelizeConnection.define('board', {
	title: {
		type: Sequelize.STRING,
		required: true	
	}
})

Board.belongsTo(User);
Board.belongsToMany(Image, {through: 'board_images'});
Image.belongsToMany(Board, {through: 'board_images'});

// Board.sync()

module.exports = Board;