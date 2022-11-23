const { db } = require("./db");

const seed = async () => {
  await db.sync({ force: true });
  console.log("Database created and reset!");
};

seed();

module.exports = seed;
