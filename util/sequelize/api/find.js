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

export function saveRecord(from, to) {
  Record.count({
    where: {
      from: from,
      to: to,
    }
  }).then((count) => {
    // do update
    if (count !== 0) {
      return Record.update({
        record: "uploads/" + from + "To" + to + ".wav",
      },
      {
        where: {
          from : from,
          to: to,
        }
      }).then((records) => {
        return records;
      })
    } else {
      return Record.create({
        from: from,
        to: to,
        record: "uploads/" + from + "To" + to + ".wav",
      }).then((records) => {
        return records;
      })
    }
  })
}
