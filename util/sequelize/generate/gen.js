const User = require('../model/user');
const Record = require('../model/record');
const fs = require('fs');
const path = require('path');

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

Record.sync({force: true}).then(() => {
  const audioDataPath = 'static/' + 'Black_Ant_realest_year_9.mp3';
  
  return Record.bulkCreate([
    {
      from: 'wonyeong',
      to: 'minwoo',
      record: audioDataPath,
    },
  ])
})