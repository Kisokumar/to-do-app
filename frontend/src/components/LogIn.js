import { useState } from "react"

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
    props.setIsLogInShown(current => !current);
    alert("Log in completed successfully");
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
