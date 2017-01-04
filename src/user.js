const mongoose = require('mongoose');
const PostSchema = require('./post');

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
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});

UserSchema.virtual('postCount').get(function () {
  return this.posts.length;
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
