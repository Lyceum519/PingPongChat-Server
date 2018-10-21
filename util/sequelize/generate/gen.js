const User = require('../model/user');

User.sync({force: true}).then(() => {
  // Table created
  // return User.create({
  //   name: 'wonyeong',
  // });

  return User.bulkCreate([
    { name: 'wonyeong' },
    { name: 'minwoo' },
  ])
});