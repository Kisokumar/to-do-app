import styled from 'styled-components'
import fetchData from '../utils/fetchData'

export default function OneTask(props) {
  function deleteTask() {
    fetchData(`/users/tasks/${props.id}`, "DELETE");
  }

  return(
    <div className="task-item">
      <CheckBox />
      <div>{props.title} </div>
      <div>{props.date}</div>
      <button id="delete-task" onClick={deleteTask}> <img id="bin-btn" src="https://icons.veryicon.com/png/o/commerce-shopping/soft-designer-online-tools-icon/delete-77.png"/> </button>
    </div>
  )
}

const CheckBox = styled.div `
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border-style: solid;
    border-width: 8px;
    border-color: #ff8314;
    background-color: transparent;
`
