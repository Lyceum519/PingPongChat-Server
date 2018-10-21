const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize().define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;