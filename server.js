// BASE SETUP
// =============================================================================

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//connect to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useMongoClient: true,
});


// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080;    // set our port

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router()           // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' })
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port)
