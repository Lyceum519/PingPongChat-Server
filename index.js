import express from 'express'
import bodyParser from 'body-parser';
import api from './api/index';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.listen(7001, function() {
  console.log('Dev server listening on port 7001!')
});