const  Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB,process.env.UN, process.env.PASSWORD, {
       host: process.env.HOST,
       dialect: 'mysql'
       });

module.exports = sequelize;

