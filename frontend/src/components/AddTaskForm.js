import { useState } from "react"
import addTask from "../utils/addTask";

export default function AddTaskForm(props) {
  const [taskname, setTaskname] = useState();
  const [datedue, setDatedue] = useState();
  const [taskdesc, setTaskdesc] = useState();
  const [category, setCategory] = useState();
  const [priority, setPriority] = useState();

  function submitRegister(event) {
    event.preventDefault()
    const newTask = {
      username: props.globalusername,
      taskname:taskname,
      datedue: datedue,
      taskdesc: taskdesc,
      category: category,
      priority: priority
    }

    console.log(newTask);
    addTask(newTask, props.globalusername);
    props.setIsAddTaskShown(current => !current);
    alert("Task added successfully");
  }

  return(
    <div className="form-space">
      <div></div>
      <form className="task-form" onSubmit={submitRegister}>
        <input onChange={(e) => setTaskname(e.target.value)} placeholder="Task Name" /><br></br>
        <input onChange={(e) => setDatedue(e.target.value)} placeholder="Due Date" /><br></br>
        <input onChange={(e) => setTaskdesc(e.target.value)} placeholder="Task Description" /><br></br>
        <input onChange={(e) => setCategory(e.target.value)} placeholder="Category" /><br></br>
        <input onChange={(e) => setPriority(e.target.value)} placeholder="Priority" /><br></br>
        <button className="form-btn" type="submit">Add Task</button>
      </form>
    </div>
  )
}
