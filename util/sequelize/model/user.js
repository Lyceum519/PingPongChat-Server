const Sequelize = require('sequelize');
const config = require('../config');

const User = config().define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: true,
    unieque: false,
  }
});

module.exports = User;