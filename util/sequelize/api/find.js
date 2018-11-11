const User = require('../model/user');
const Record = require('../model/record');

export function findAllUser() {
  return User.findAll().then((users) => {
    return users;
  });
}

export function findAllRecord() {
  return Record.findAll().then((records) => {
    return records;
  })
}

export function findRecordByUsers(from, to) {
  return Record.findOne({
    where: {
      from: from,
      to: to,
    }
  }).then((records) => {
    return records;
  })
}