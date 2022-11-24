const express = require("express");
const app = express();

const userRouter = require("./routes/User");
const taskRouter = require("./routes/Task");

app.use(express.json());

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(5000);

module.exports = app;
