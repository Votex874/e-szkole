const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creating a user Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'email must be filled']
  },
  password: {
    type: String,
    required: [true, 'email must be filled']
  },
  role: {
    type: String,
    default: 'Parent'
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User; 


