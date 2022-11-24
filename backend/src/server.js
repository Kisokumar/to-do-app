const express = require("express");
const { db } = require("./db/db");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/User");

app.use(cors());
app.use(express.json());


app.use("/users", userRouter);
app.use(cors());

app.listen(5001, () => {
  console.log("listing to port 5001");
});

module.exports = app;
