'use strict';

// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./lib/models/user');

process.env.NODE_ENV = 'development';

// EXPRESS
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
const router = express.Router();
app.use('/api', router);
app.set('dbUrl', config.db[process.env.NODE_ENV]);

// Test route (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
  res.json({message: 'hooray! welcome to our api!'});
});

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

// DB
mongoose.connect(app.get('dbUrl'), {
  useMongoClient: true,
});

// User routes
router.route('/users')
  .post((req, res) => {
    User.create({name: req.body.name}, (err, user) => {
      if (err)
        res.send(err);

      res.json(user);
    });
  })
  .get((req, res) => {
    User.find((err, users) => {
      if (err)
        res.status(500).send(err);

      res.json(users);
    });
  });

router.route('/users/:user_id')
  .get((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json(user);
    })
  })
  .put((req, res) => {
    User.findOneAndUpdate({_id: req.params.user_id}, {name: req.body.name}, null, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json({user, message: "user updated"});
    });
  })
  .delete((req, res) => {
    User.remove({
      _id: req.params.user_id,
    }, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json({user, message: "user deleted"});
    });
  });

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port + '/api');

module.exports = {
  app,
};
