const { Router } = require("express");
const userRouter = Router();
const User = require("../models/");


userRouter.get("/", async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

userRouter.get("/:username", async (req, res) => {
    try {
        const user = await User.findOne({where: {username: req.params.username}})
        res.status(200).send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})

userRouter.get("/:username/tasks"), async (req, res) => {
    try {
        const tasks = await Task.findAll({where: { username: req.params.username}})
        res.status(200).send(tasks)
    } catch(error) {
        res.status(500).send(error)
    }
}

userRouter.post("/create", async (req, res) => {
    try {
       user = await User.create(req.body)
       res.status(200).send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})

userRouter.get("/tasks/:taskid"), async (req, res) => {
    try {
       const tasks = await Task.findOne({where: {id: req.params.taskid}})
       res.status(200).send(tasks)
    } catch(error) {
        res.status(500).send(error)
    }
}

userRouter.post("/:username/tasks/create", async(req, res) => {
    try {

       task = await Task.create(req.body)
       res.status(200).send(task)
    } catch(error) {
        res.status(500).send(error)
    }
})


module.exports = userRouter;
