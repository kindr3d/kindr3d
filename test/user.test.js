const sinon = require('sinon');
const assert = require('chai').assert;
const mongoose = require('mongoose');
const app = require('../server').app;
const config = require('../config');
// const sinonMongoose = require('sinon-mongoose');

// Importing our user model for our unit testing.
const User = require('../lib/models/user');

process.env.NODE_ENV = 'test';
app.set('dbUrl', config.db[process.env.NODE_ENV]);

describe('User model', () => {

  before(() => {
    mongoose.connect(app.get('dbUrl'), {
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
    const name = 'Jane';
    User.create({name}, (err, user) => {
      assert.notOk(err);
      assert.equal(user.name, name);
      done();
    });
  });

});
