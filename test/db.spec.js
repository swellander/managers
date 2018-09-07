const { expect } = require('chai');
const db = require('../db');
const { User } = db;

describe('data layer', () => {
  beforeEach(async () => {
    await db.syncSeed();
  });  

  it('has three users', () => {
    return User.findAll()
      .then(users => {
        expect(users.length).to.equal(3)
        expect(users[0].name).to.equal('Michael')
      })
  });

  it('users can have managers', () => {
    let dwight;
    let michael;
    return User.findById(2)
      .then(user => dwight = user)
      .then(() => User.findById(1))
      .then(user => michael = user)
      .then(() => {
        dwight.setManager(michael);
        expect(dwight.managerId).to.equal(michael.id)
      })
  }); 

})
