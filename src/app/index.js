const express = require('express');
const todoRoute = require('./routes/todo.route');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use('/v1', todoRoute);

app.listen(3000, () => {
  console.log('App is listening on Port 3000');
});