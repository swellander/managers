const { expect } = require('chai');
const db = require('../server/db');
const { User } = db;

describe('data layer', () => {
  beforeEach(async () => {
    await db.syncSeed();
  });

  it('has three users', () => {
    return User.findAll()
      .then(users => {
        expect(users.length).to.equal(3)
        expect(users[0].name).to.equal('Robb Stark')
      })
  });

  it('bannermen have lords', () => {
    let torrhen;
    let robb;
    return User.findById(2)
      .then(user => torrhen = user)
      .then(() => User.findById(1))
      .then(user => robb = user)
      .then(() => {
        torrhen.setLord(robb);
        expect(torrhen.lordId).to.equal(robb.id)
      })
  });

})
