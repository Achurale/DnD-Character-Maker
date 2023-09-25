const sequelize = require('../config/connection');
const { User, Character, Race, Class, Background } = require('../models');

const userData = require('./userData.json');
const characterData = require('./characterData.json');
const raceData = require('./raceData.json');
const classData = require('./classData.json');
const backgroundData = require('./backgroundData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Race.bulkCreate(raceData)
  await Class.bulkCreate(classData)
  await Background.bulkCreate(backgroundData)
  await User.bulkCreate(userData);
  await Character.bulkCreate(characterData)

  process.exit(0);
};

seedDatabase();
