import styled from 'styled-components'

export default function OneTask(props) {
  return(
    <div className="task-item">
      <CheckBox />
      <div>{props.title} </div>
      <div>{props.date}</div>
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
