import { useState } from "react";
import fetchData from "../utils/fetchData";
import registerUser from "../utils/resgisterUser";

export default function Register(props) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitRegister(event) {
    event.preventDefault();
    const newUser = {
      fullname: name + " " + surname,
      username: username,
      password: password,
      email: email,
    };

    try {
      registerUser(newUser);
      props.setIsRegisterShown((current) => !current);
      console.log("Registration completed successfully");
      console.log("LogIn to start using to-do");
    } catch (error) {
      console.log("username already exists");
    }
  }

  return (
    <div className="form-space">
      <div></div>
      <form
        className="input-box"
        className="user-form"
        onSubmit={submitRegister}
      >
        <p className="form-title-text">Register:</p>
        <input
          className="input-box"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br></br>
        <input
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
          className="input-box"
        />
        <br></br>
        <input
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br></br>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="input-box"
          placeholder="Username"
        />
        <br></br>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-box"
        />
        <br></br>
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
