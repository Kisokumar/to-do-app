import fetchData from "../utils/fetchData";
import OneTask from "./OneTask";
import AddTaskForm from "./AddTaskForm";
import { useState, useEffect } from "react";
import { globalusername } from "./LogIn";



export default function TaskList(props) {

  const [isAddTaskShown, setIsAddTaskShown] = useState(false);

  function AddTaskClick() {
    setIsAddTaskShown(current => !current);
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(`/users/${props.globalusername}/tasks`, "GET").then((data) => setData(data));
  }, [data]);

    return (

      <div className="task-list">
        <div id="tasks-buttons">
          <button id="add-task" onClick={AddTaskClick}> <img src="https://www.seekpng.com/png/detail/10-109495_orange-plus-clip-art-at-clker-orange-plus.png"/> </button>
        </div>

        {isAddTaskShown && (
          <AddTaskForm setIsAddTaskShown={setIsAddTaskShown} globalusername={globalusername}/>
        )}

        {data.map((item, index) => <OneTask key={index}
          title={item.taskname}
          date={item.datedue}/>)}
      </div>
    );
  };
