import { useState } from "react";
import userExists from "../utils/userExists";

let globalusername;

function LogIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function submitLogIn(event) {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    console.log(user);
    if (userExists) {
      console.log("Log in completed successfully");
      props.setIsUserLogged((current) => !current);
    } else {
      alert("Incorrect username or password");
    }
    props.setIsLogInShown((current) => !current);
  }

  globalusername = username;

  return (
    <div className="form-space">
      <div></div>
      <form className="user-form" onSubmit={submitLogIn}>
        <p className="form-title-text">Sign in:</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-box"
        />
        <br></br>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-box"
        />
        <br></br>
        <button className="form-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export { LogIn, globalusername };
