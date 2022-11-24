import styled from 'styled-components'
import Button from '@mui/material/Button';

export default function Tasks (props){
    return (<div>
        <CheckBox />
        <p>{props.description}Test description</p>
        {/* <Button variant="contained">Hello World</Button> */}
        <p>{props.date}</p>
        </div>)
}

const CheckBox = styled.div `
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border-style: solid;
    border-width: 12px;
    border-color: #ff8314;
    background-color: transparent;
    // display: inline;



`

