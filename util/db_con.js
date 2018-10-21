import mysql from 'mysql';
import config from '../config/database'

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({
        host: config.local.host,
        port: config.local.port,
        user: config.local.user,
        password: config.local.password,
        database: config.local.database
      })
    },
    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
          // con.query("CREATE DATABASE "+ config.local.database, function (err, result) {
          //   if (err) throw err;
          //   console.log("Database created");
          // });
        }
      })
    }
  }
};