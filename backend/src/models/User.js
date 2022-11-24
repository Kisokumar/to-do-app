const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db");
const uniqueIdGenerator = require("../middleware/uniqueIdGenerator");

const User = db.define("users", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  fullname: { type: DataTypes.STRING, allowNull: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true },
});

module.exports = { User };
