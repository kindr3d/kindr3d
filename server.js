'use strict';

// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const userRouter = require('./server/routes/userRoutes');

// EXPRESS
const app = express();
process.env.NODE_ENV = 'development';
app.set('env', process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
const defaultRouter = express.Router();
// Test route (accessed at GET http://localhost:8080/api)
defaultRouter.get('/', (req, res) => {
  res.json({message: 'hooray! welcome to our api!'});
});

defaultRouter.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

app.use('/api', defaultRouter);
app.use('/api/users', userRouter);

// DB
app.set('dbUrl', config.db[process.env.NODE_ENV]);
mongoose.connect(app.get('dbUrl'), {
  useMongoClient: true,
});


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port + '/api');

module.exports = {
  app,
};
