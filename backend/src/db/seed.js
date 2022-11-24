const { db } = require("./db");
const { User, Task } = require("../models");
const fs = require("fs").promises;
const path = require("path");

const seed = async () => {
  await db.sync({ force: true });
  console.log("Database created and reset!");

  mockData = true; //this option should option should be false when deployed/ project is finished
  if (mockData === true) {
    const taskSeedPath = path.join(__dirname, "/mocks/task.json");
    const userSeedPath = path.join(__dirname, "/mocks/user.json");
    const buffer = await fs.readFile(taskSeedPath);
    const userBuffer = await fs.readFile(userSeedPath);
    const { tasksData } = JSON.parse(String(buffer));
    const { usersData } = JSON.parse(String(userBuffer));
    const TaskPromises = tasksData.map((task) => Task.create(task));
    const UserPromises = usersData.map((user) => User.create(user));
    await Promise.all(TaskPromises);
    await Promise.all(UserPromises);
    console.log("Mock data has been seeded!");
  }
};

seed();

module.exports = seed;
