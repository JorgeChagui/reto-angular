const Sequelize = require('sequelize');

var sequelize = require('../ssql');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

module.exports = User;