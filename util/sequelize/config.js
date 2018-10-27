const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');


function sequelize() {
  return new Sequelize(
    dbConfig.local.database, // 데이터베이스 이름
    dbConfig.local.user, // 유저 명
    dbConfig.local.password, // 비밀번호
    {
      'host': dbConfig.local.host, // 데이터베이스 호스트
      'dialect': 'mysql' // 사용할 데이터베이스 종류
    }
  );
}

// const sequelize = new Sequelize(
//   dbConfig.local.database, // 데이터베이스 이름
//   dbConfig.local.user, // 유저 명
//   dbConfig.local.password, // 비밀번호
//   {
//     'host': dbConfig.local.host, // 데이터베이스 호스트
//     'dialect': 'mysql' // 사용할 데이터베이스 종류
//   }
// );

module.exports = sequelize;