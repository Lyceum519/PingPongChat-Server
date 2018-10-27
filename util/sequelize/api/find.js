const User = require('../model/user');

export function findAllUser() {
  return User.findAll().then((users) => {
    console.log(users);
    return users;
  });
}

