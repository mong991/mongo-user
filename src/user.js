const mongoose = require('mongoose');

// create Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String
});

// create model
const User = mongoose.model('user', UserSchema);

/*
  if mongodb do not have 'user' collection.
  it will create 'user' collection
  then collection = user
*/

// export only models
module.exports = User;
