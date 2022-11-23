const { Router } = require('express')
const taskRouter = Router()

app.get("/tasks/:taskid", (req, res) => {
    const task = req.params.tasks
    res.send()     
})

app.put("/tasks/create", (req, res) => {
    
})