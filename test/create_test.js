const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    // true or false

    // model follow ths schema
    const joe = new User({ name: 'Joe' }); // Creating new User
    // Save instance to model database
    joe.save()
      .then(() => {
        //has joe been saved successfuly
        assert(!joe.isNew);
        done();
      });
  });
});
