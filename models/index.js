const User = require('./User');
const Character = require('./Character');
const Race = require('./Race');
const Role = require('./Class');
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
Character.belongsTo(Race, {
  foreignKey: 'race_id',
  onDelete: 'CASCADE'
});

Race.hasMany(Character, {
  foreignKey: 'race_id'
});
// -------------------------------
// One class to one character
Character.belongsTo(Role, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
});

Role.hasMany(Character, {
  foreignKey: 'role_id'
});
// ---------------------------------
// One background to one character
Character.belongsTo(Background, {
  foreignKey: 'background_id',
  onDelete: 'CASCADE'
});

Background.hasMany(Character, {
  foreignKey: 'background_id'
});



module.exports = { User, Character, Race, Role, Background };
