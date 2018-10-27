import express from 'express';
import User from '../model/user';
import dbConnection from '../util/db_con';
import { findAllUser } from '../util/sequelize/api/find'

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

router.get('/users', async (req, res, next ) => {
let users = [
	new User('James Coonce', 'none@none.com'),
	new User('Bob Coonce', 'none@none.com'),
	new User('Euri', 'none@none.com'),
	new User('Norman','none@none.com'),
];
const dbUsers = await findAllUser().then((res) => {
	return res;
});
res.json(dbUsers);
});

router.post('/user/create', (req, res) => {
  let user = new User(req.body.name, req.body.email);
  res.json(user);
})

export default router;