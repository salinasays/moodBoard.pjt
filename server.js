var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
var Board = require('./models/board-model.js');
var Image = require('./models/image-model.js');
var User = require('./models/user-model.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/bundle')));


app.listen('3000', () => console.log('Listening on port 3000'));

app.use('/api', require('./routes'))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});