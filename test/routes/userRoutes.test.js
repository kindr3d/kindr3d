const {app, router} = require('../../server');
const supertest = require('supertest');
const mongoose = require('mongoose');
const config = require('../../config');

process.env.NODE_ENV = 'test';
app.set('dbUrl', config.db[process.env.NODE_ENV]);
