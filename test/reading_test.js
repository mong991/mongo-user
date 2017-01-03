const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    //instance of user
    User.find({ name: 'Joe' })
      .then((users) => {
        //users[0]._id => object
        //joe.id => string
        assert(users[0]._id.toString() === joe.id)
        done();
      });
  });
});
