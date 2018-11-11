import express from 'express';
import path from 'path';
import User from '../model/user';
import dbConnection from '../util/db_con';
import { findAllUser, findAllRecord, findRecordByUsers } from '../util/sequelize/api/find'

let router = express.Router();
const database = dbConnection().init();
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

export default router;