const User = require('../model/user');
const Record = require('../model/record');
const fs = require('fs');
const path = require('path');

User.sync({force: true}).then(() => {
  // Table created
  // return User.create({
  //   email: 'wonyeong',
  //   status: '0',
  // });

  return User.bulkCreate([
    {
      email: 'wonyeong91@gmail.com',
      status: 0,
    },
    {
      email: 'minwoo@gmail.com',
      status: 0,
    },
  ])
});

Record.sync({force: true}).then(() => {
  const audioDataPath = 'static/Black_Ant_realest_year_9.mp3';
  
  return Record.bulkCreate([
    {
      from: 'wonyeong',
      to: 'minwoo',
      record: audioDataPath,
    },
  ])
})