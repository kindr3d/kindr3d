const request = require('supertest');
const assert = require('chai').assert;
const mongoose = require('mongoose');
const sinon = require('sinon');

const {app} = require('../../server');
const config = require('../../config');
const User = require('../../lib/models/user');

process.env.NODE_ENV = 'test';
app.set('env', process.env.NODE_ENV);
app.set('dbUrl', config.db[process.env.NODE_ENV]);

describe('Route /user', () => {
  before(() => {
    mongoose.connect(app.get('dbUrl'), {
      useMongoClient: true,
    });
  });

  after(() => {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove();
    }
    mongoose.disconnect();
  });

  it('creats user on post', (done) => {
    const name = 'Testuser';
    const createSpy = sinon.spy(User, 'create');
    request(app)
      .post('/api/users')
      .set('Accept', /json/)
      .send({name})
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, res) => {
        assert.equal(res.body.name, name);
        sinon.assert.calledOnce(createSpy);
        done();
      });
  });
});
