import { useState } from "react";
import Register from "./components/Register";
import { LogIn, globalusername } from "./components/LogIn";
import "./App.css";
import Tasks from "./components/Tasks";
import TaskList from "./components/TaskList";
import BinToggle from "./components/BinToggle";

function App() {
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLogInShown, setIsLogInShown] = useState(false);
  const [isUserlogged, setIsUserLogged] = useState(false);

  function registerClick(event) {
    if (isLogInShown) {
      setIsLogInShown((current) => !current);
    }
    if (isUserlogged) {
      setIsUserLogged((current) => !current);
    }

    setIsRegisterShown((current) => !current);
  }

  function logInClick(event) {
    if (isRegisterShown) {
      setIsRegisterShown((current) => !current);
    }
    if (isUserlogged) {
      setIsUserLogged((current) => !current);
    }

    setIsLogInShown((current) => !current);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="title">
          <div id="title-to">to-</div>
          <div id="title-do">do</div>
        </div>

        <div id="header-buttons">
          <button className="header-btn" id="login" onClick={logInClick}>
            sign in
          </button>
          <button className="header-btn" id="register" onClick={registerClick}>
            register
          </button>
        </div>
      </header>
      <main>
        {isRegisterShown && (
          <Register setIsRegisterShown={setIsRegisterShown} />
        )}
        {isLogInShown && (
          <LogIn
            setIsLogInShown={setIsLogInShown}
            isUserlogged={isUserlogged}
            setIsUserLogged={setIsUserLogged}
          />
        )}
        {console.log("login", globalusername)}
        {isUserlogged && (
          <TaskList
            globalusername={globalusername}
            setIsLogInShown={setIsLogInShown}
            setIsRegisterShown={setIsRegisterShown}
            isLogInShown={isLogInShown}
            isRegisterShown={isRegisterShown}
          />
        )}
      </main>
    </div>
  );
}

export default App;
