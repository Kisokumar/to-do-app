const { Router } = require("express");
const userRouter = Router();
const { User, Task } = require("../models/");

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (!user) {
      res.status(500).send("User not found!");
    } else {
      res.status(500).send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/:username/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { username: req.params.username },
    });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.post("/:username/tasks/create", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/tasks/:taskid/", async (req, res) => {
  try {
    const tasks = await Task.findOne({ where: { id: req.params.taskid } });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.delete("/tasks/:taskid/", async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.taskid } });
  try {
    const del = await Task.destroy({ where: { id: req.params.taskid } });
    if (!del) {
      res.status(200).send("Successfully deleted");
    }
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

module.exports = userRouter;
