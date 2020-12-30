"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Step);
      this.belongsTo(models.Room, { foreignKey: "roomId" });
    }
  }
  Game.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Room",
          key: "id",
        },
      },
      playerFirst: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      playerSecond: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userWin: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};