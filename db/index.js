const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/managers',
  { logging: false }
);

const User = conn.define('user', {
  name: Sequelize.STRING
});

//relationships
User.belongsTo(User, { as: 'manager' })
User.hasMany(User, { as: 'employee' })

const syncSeed = async () => {
  await conn.sync({ force: true });
  const users = ['Michael', 'Dwight', 'Pam'];
  const [ michael, dwight, pam ] = await Promise.all(users.map( name => {
    return User.create({ name })
  }));
}

module.exports = {
  conn,
  syncSeed,
  User
};
