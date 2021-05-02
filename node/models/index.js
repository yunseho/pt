const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize =new Sequelize(config.datebase, config.username, config.password,config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User =User;
db.Comment=Comment;

User.init(sequelize);
Comment.init(sequelize);


module.exports = db;
