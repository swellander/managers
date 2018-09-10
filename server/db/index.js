const Sequelize = require('sequelize');
const seedData = require('./seed');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/managers',
  { logging: false }
);

const User = conn.define('user', {
  name: Sequelize.STRING,
  house: Sequelize.STRING,
  imageLink: {
    type: Sequelize.STRING,
    get() {
      return 'https://api.got.show' + this.getDataValue('imageLink')  
    }
  },
  titles: Sequelize.ARRAY(Sequelize.STRING)
});


//relationships
User.belongsTo(User, { as: 'manager' })
User.hasMany(User, { as: 'employee' })

const syncSeed = async () => {
  await conn.sync({ force: true });
  const users = ['Michael', 'Dwight', 'Pam'];
  const [ robb, torrhen, tyrion ] = await Promise.all(seedData.map( character => {
    return User.create(character)
  }));
}

module.exports = {
  conn,
  syncSeed,
  User
};
