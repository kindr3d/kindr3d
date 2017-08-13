const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
});

UserSchema.plugin(timestamp);
module.exports = mongoose.model('User', UserSchema);
