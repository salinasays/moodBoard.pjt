 'use strict';

const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const User = require('./models/user-model');
const Board = require('./models/board-model');
const Image= require('./models/image-model');

User.sync({force: true})
.then(()=> {
	Board.sync({force: true});
})
.then(() => {
	User.bulkCreate([
		{username: 'NasitaHaque', email: 'Nasita@Haque.com', password: 'hello'},
		{username: 'SalinaFu', email: 'Salina@Fu.com', password: 'bye'}	

	])
})
.then(() => {
	return User.findAll()
})
.then((data) => {
	if(data) console.log('Database seed successful!');
})
.catch((err) => {
	if(err) console.log('Seed error!', err);
})