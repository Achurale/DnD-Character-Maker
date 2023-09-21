const sequelize = require('../config/connection');
const { User, Character, Race, Class, Background } = require('../models');

const userData = require('./userData.json');
const characterData = require('./testcharacterData.json');
const raceData = require('./testraceData.json');
const classData = require('./testchaData.json');
const backgroundData = require('./testbackgroundData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Character.bulkCreate(characterData)
  await Race.bulkCreate(raceData)
  await Class.bulkCreate(classData)
  await Background.bulkCreate(backgroundData)

  // OLD CODE --------------------------------------
  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
