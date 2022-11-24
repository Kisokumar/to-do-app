const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db");

const Task = db.define("tasks", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  taskname: { type: DataTypes.STRING, allowNull: false },
  datedue: { type: DataTypes.STRING, allowNull: false },
  priority: { type: DataTypes.STRING, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  userId: { type: Sequelize.UUID, allowNull: false },
});

module.exports = { Task };
