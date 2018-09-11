const Sequelize = require('sequelize');
const seedData = require('./seed');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/managers',
  { logging: false }
);

const Bannerman = conn.define('bannerman', {
  name: Sequelize.STRING,
  house: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('house').replace('House ', '');
    }
  },
  imageLink: {
    type: Sequelize.STRING,
    defaultValue: null,
    get() {
      const url = this.getDataValue('imageLink');
      if (url) return 'https://api.got.show' + url;
      else return 'https://i.ytimg.com/vi/F1QtStYNPXE/maxresdefault.jpg'
    }
  },
  titles: Sequelize.ARRAY(Sequelize.STRING)
});


//relationships
Bannerman.belongsTo(Bannerman, { as: 'lord' })

const syncSeed = async () => {
  await conn.sync({ force: true });
  const [robb, torrhen, tyrion] = await Promise.all(seedData.map(character => {
    return Bannerman.create(character)
  }));

  torrhen.setLord(robb);
}

module.exports = {
  conn,
  syncSeed,
  Bannerman
};
