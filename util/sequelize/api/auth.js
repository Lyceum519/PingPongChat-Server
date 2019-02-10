import verify from '../../google-auth/verify';

const User = require('../model/user');
const SUCCESS = "success";
const FAIL = "fail";

export function signIn(email, name, photo, token) {
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
          name: name,
          photo: photo,
          status: 1,
        },
        {
          where: {
            email : email,
          }
        }).then((user) => {
          return SUCCESS;
        }).catch((err) => {
          return err;
        });
      } 
      // create user
      else {
        return User.create({
          email: email,
          name: name,
          photo: photo,
          status: 1,
        }).then((user) => {
          return SUCCESS;
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
    return SUCCESS;
  }).catch((err) => {
    console.log("signOut failed: " + err);
    return err;
  });
}
