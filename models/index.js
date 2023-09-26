const User = require('./User');
const Character = require('./Character');
const Race = require('./Race');
const Class = require('./Class');
const Background = require('./Background');

// many character to one user
User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});
// ------------------------------
// One race to one character
Character.hasOne(Race, {
  foreignKey: 'race_id',
  onDelete: 'CASCADE'
});

Race.belongsTo(Character, {
  foreignKey: 'race_id'
});
// -------------------------------
// One class to one character
Character.hasOne(Class, {
  foreignKey: 'class_id',
  onDelete: 'CASCADE'
});

Class.belongsTo(Character, {
  foreignKey: 'class_id'
});
// ---------------------------------
// One background to one character
Character.hasOne(Background, {
  foreignKey: 'background_id',
  onDelete: 'CASCADE'
});

Background.belongsTo(Character, {
  foreignKey: 'background_id'
});



module.exports = { User, Character, Race, Class, Background };
