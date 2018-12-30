const User = require('../model/user');

export function signIn(email) {
  return User.count({
    where: {
      email: email,
    }
  }).then((count) => {
    // do update
    if (count !== 0) {
      return User.update({
        status: 1,
      },
      {
        where: {
          email : email,
        }
      }).then((user) => {
        return user;
      }).catch((err) => {
        return err;
      });
    } else {
      return User.create({
        email: email,
        status: 1,
      }).then((user) => {
        return user;
      }).catch((err) => {
        return err;
      });
    }
  }).catch((err) => {
    return err;
  });
};

export function signOut(email) {
  return User.update({
    status: 0,
  },
  {
    where: {
      email: email,
    }
  }).then((user) => {
    return user;
  }).catch((err) => {
    console.log("signOut failed: " + err);
    return err;
  });
}
