import { useState } from "react"
import registerUser from "../utils/resgisterUser";

export default function Register(props) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitRegister(event) {
    event.preventDefault()
    const newUser = {
      fullname: name + " " + surname,
      username: username,
      password: password,
      email:email
    }

    console.log(newUser);
    registerUser(newUser);
    props.setIsRegisterShown(current => !current);
    alert("Registration completed successfully");
    alert("LogIn to start using to-do");
  }

  return(
    <div className="form-space">
      <div></div>
      <form className="user-form" onSubmit={submitRegister}>
        <label>name: </label><br></br>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" /><br></br>
        <label>surname: </label><br></br>
        <input onChange={(e) => setSurname(e.target.value)} placeholder="Surname" /><br></br>
        <label>email: </label><br></br>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br>
        <label>username: </label><br></br>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br></br>
        <label>password: </label><br></br>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
        <button className="form-btn" type="submit">Register</button>
      </form>
    </div>
  )
}
