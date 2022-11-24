const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./src/db/todolist.sqlite",
  logging: false,
});

//export
module.exports = { db, DataTypes };
