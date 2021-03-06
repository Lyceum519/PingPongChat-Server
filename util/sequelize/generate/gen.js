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
      name: 'wonyeong',
      photo: '',
      status: 0,
      fcm_token: "default",
    },
    {
      email: 'minwoo@gmail.com',
      name: 'minwoo',
      photo: '',
      status: 0,
      fcm_token: "default",
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