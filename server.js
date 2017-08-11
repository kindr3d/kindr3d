const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
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

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port + '/api');
