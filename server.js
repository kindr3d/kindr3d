const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// connect to the database
mongoose.connect('CONFIG HERE', {
  useMongoClient: true,
});

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

 // set our port
const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
// get an instance of the express Router
const router = express.Router();
app.use('/api', router)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
  res.json({message: 'hooray! welcome to our api!'})
});

// more routes for our API will happen here
router.route('/users')

.post((req, res) => {
  var user = new User();
  user.name = req.body.name;

  user.save((err) => {
    if (err)
      res.send(err);

      res.json({ message: 'Bear created!' });
  });
})

.get((req, res) => {
  res.json({message:'blop'})
    })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port + '/api');


//MONGO
var User = require('./lib/models/user');
