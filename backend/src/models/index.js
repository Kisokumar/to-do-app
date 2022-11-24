const { User } = require("./User");
const { Task } = require("./Task");

Task.belongsTo(User, { through: "username" });
User.hasMany(Task);

module.exports = { User, Task };
