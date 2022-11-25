const express = require("express");
const { db } = require("./db/db");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/User");

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use(cors());

// this port seems to work when running both react and express server in one instance
port = 5003;

app.listen(port, () => {
  console.log(`Database: Listening to port ${port}`);
});

module.exports = app;
