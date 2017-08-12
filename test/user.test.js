const sinon = require('sinon');
const assert = require('chai').assert;
const mongoose = require('mongoose');
// const app = require('../server').app;
// const config = require('../config');
// const sinonMongoose = require('sinon-mongoose');

// Importing our user model for our unit testing.
const User = require('../lib/models/user');

// process.env.NODE_ENV = 'test';
// app.set('dbUrl', config.db[process.env.NODE_ENV]);

// console.log(app);

describe('User model', () => {

  before(() => {
    mongoose.connect('mongodb://elvina:elvinapass@ds129179.mlab.com:29179/kindr3d-test', {
      useMongoClient: true,
    });
  });

  after(() => {
    for (var i in mongoose.connection.collections) {
       mongoose.connection.collections[i].remove();
    }
    mongoose.disconnect();
  });

  it('should create a user', (done) => {
    const username = 'Jane';
    const user = new User();
    user.name = username;
    user.save((err) => {
      assert.notOk(err);
      assert.equal(user.name, username);
      done();
    })
  });

  it('should find user by id', (done) => {
    const user = new User();
    user.name = 'Testname';
    user.save().then(() => {
      User.findById(user._id, (err, returnedUser) => {
        console.log(returnedUser, user);
        assert.notOk(err);
        assert.equal(returnedUser.name, user.name);
        // assert.equal(returnedUser._id, user._id);
        done();
      });
    });
  });
});
