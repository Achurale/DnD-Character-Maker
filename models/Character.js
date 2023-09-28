// imported from different branch for testing purposes.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      race_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'race',
            key: 'id'
        }
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'id'
        }
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,20]
        }
      },
      background_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'background',
            key: 'id'
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      constitution: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      intelligence: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      charisma: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'character',
    }
  );
  
  module.exports = Character;