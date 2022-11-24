import { useState } from "react"

export default function Register(props) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  function submitRegister(event) {
    event.preventDefault()
    const newUser = {
      fullname: name + " " + surname,
      username: username,
      password: password
    }

    console.log(newUser);
    props.setIsRegisterShown(current => !current);
    alert("Registration completed successfully");
  }

  return(
    <form onSubmit={submitRegister}>
      <label>Name: </label>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" /><br></br>
      <label>Surname: </label>
      <input onChange={(e) => setSurname(e.target.value)} placeholder="Surname" /><br></br>
      <label>Username: </label>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br></br>
      <label>Password: </label>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
      <button type="submit">Register</button>
    </form>

  )
}