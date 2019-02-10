import express from 'express';
import path from 'path';
import multer from 'multer';
import User from '../model/user';
import dbConnection from '../util/db_con';
import {
  findAllUser,
  findAllRecord,
  findRecordByUsers,
  saveRecord, 
}  from '../util/sequelize/api/find'
import {
  signIn,
  signOut
} from '../util/sequelize/api/auth'

let router = express.Router();
const database = dbConnection().init();

/*
 file storage
*/
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });
dbConnection().test_open(database);

/* GET home page. */
router.get('/', (req, res, next) => {
let welcome = [
	{
    ping: 'welcome'
	},
	{
    pong: "visit"
	},
  {
    chat: "us!"
	}
];
res.json(welcome);
});


/* Get all of users */
router.get('/users', async (req, res, next) => {
  const dbUsers = await findAllUser().then((res) => {
  	return res;
  });
  res.json(dbUsers);
});

/* Create user */
router.post('/user/create', (req, res) => {
  let user = new User(req.body.name, req.body.email);
  res.json(user);
})

/* Get all of records */
router.get('/records', async(req, res, next) => {
	const dbRecords = await findAllRecord().then((res) => {
    return res;
  })
  res.json(dbRecords);
})

/* Get record with parmeter
   ex) /records/who?from=wonyeong&to=minwoo
*/
router.get('/records/who', async(req, res, next) => {
  const dbRecord = await findRecordByUsers(req.query.from, req.query.to)
  .then((res) => {
    return res;
  })
  res.sendFile(path.join(__dirname, '../', dbRecord.dataValues.record));
  // res.json(dbRecord);
})

/*
  Post record 
*/
router.post('/record', upload.any(), async(req, res, next) => {
  console.log(333, req.files);
  await saveRecord(req.query.from, req.query.to)
  .then((res) => {
    res.status(200);
    return res;
  })
  .catch((err) => {
    res.json(err);
    return err;
  });
})

/*
  Sign In
  change login status to 1
*/
router.post('/signin', async(req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const photo = req.body.photo;
  const token = req.body.token; 
  const signInResult = {
    result
      : await signIn(email, name, photo, token)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
  };
  return res.json([signInResult]);
})

/*
  Sign Out
  change login status to 0
*/
router.post('/signout', async(req, res, next) => {
  const email = req.body.email;
  const token = req.body.token;
  const signOutResult = {
    result
      : await signOut(email, token)
      .then((user) => {
        res.sendStatus(200);
        return user;
      })
      .catch((err) => {
        return err;
      })
  };
  return res.json([signOutResult])
})

export default router;
