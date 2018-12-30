const Sequelize = require('sequelize');
const config = require('../config');

const User = config().define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = User;