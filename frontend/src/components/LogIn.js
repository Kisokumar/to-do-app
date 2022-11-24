import { useState } from "react"
import userExists from "../utils/userExists";

export default function LogIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  function submitLogIn(event) {
    event.preventDefault()
    const user = {
      username: username,
      password: password
    }

    console.log(user);
    if (userExists) {
      alert("Log in completed successfully");
    }
    else {
      alert("Incorrect username or password");
    }
    props.setIsLogInShown(current => !current);
  }

  return(
    <form onSubmit={submitLogIn}>
      <label>Username: </label>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br></br>
      <label>Password: </label>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
      <button type="submit">Log in</button>
    </form>
  )
}
