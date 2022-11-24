const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db");

const Task = db.define("tasks", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  username: { type: DataTypes.STRING, allowNull: false },
  taskname: { type: DataTypes.STRING, allowNull: false },
  datedue: { type: DataTypes.STRING, allowNull: false },
  taskdesc: { type: DataTypes.STRING, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  priority: { type: DataTypes.STRING, allowNull: true },
});

module.exports = { Task };
