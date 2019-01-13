import verify from '../../google-auth/verify';

const User = require('../model/user');

export function signIn(email, token) {
  // verify token
  return verify(token).then(() => {
    return User.count({
      where: {
        email: email,
      }
    }).then((count) => {
      // update user
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
      } 
      // create user
      else {
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
  }).catch((err) => {
    return err;
  });
};

export function signOut(email, token) {
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
