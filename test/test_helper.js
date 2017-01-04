const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//before only exec once
//make sure it connect so we put it in before()
before((done) => {
  mongoose.connect('mongodb://localhost/user_test');

  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});



beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        // ready to run the next test!
        done();
      });
    });
  });
});
