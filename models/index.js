const User = require('./User');
const Character = require('./Character');
const Race = require('./Race');
const Class = require('./Class');
const Background = require('./Background');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.hasOne(Background , {
  foreignKey: 'character_id'
});

Background.belongsTo(Character, {
  foreignKey:'character_id'
})

Character.hasOne(Class , {
  foreignKey: 'character_id'
});

Class.belongsTo(Character, {
  foreignKey:'character_id'
})

Character.hasOne(Race , {
  foreignKey: 'character_id'
});

Race.belongsTo(Character, {
  foreignKey:'character_id'
})

module.exports = { User, Character, Race, Class, Background };
