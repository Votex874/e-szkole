const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creating a user Schema
const TestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
});

const Test = mongoose.model('users', TestSchema);

module.exports = Test;


