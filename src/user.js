const mongoose = require('mongoose');

// create Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  postCount: Number
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
