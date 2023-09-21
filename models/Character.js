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
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,20]
        }
      },
      background: {
        type: DataTypes.STRING,
        allowNull: false,
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