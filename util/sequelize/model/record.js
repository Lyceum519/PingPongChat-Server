const Sequelize = require('sequelize');
const config = require('../config');

const Record = config().define('Record', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  from: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  to: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  record: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }
});

module.exports = Record;