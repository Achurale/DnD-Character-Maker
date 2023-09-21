const User = require('./User');
const Character = require('./Character');
const Race = require('./Race')
const Class = require('./Class')
const Background = require('./Background')

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Character, Race, Class, Background };
