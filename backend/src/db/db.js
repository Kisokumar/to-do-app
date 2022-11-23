const { Sequelize, DataTypes } = require("sequelize");
const localdb = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./src/db/gym-tracker.sqlite",
  logging: false,
});

db = localdb;

module.exports = { db, DataTypes };
