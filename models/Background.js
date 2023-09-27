// imported from different branch for testing purposes.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Background extends Model {}

Background.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'background',
  }
);

module.exports = Background;