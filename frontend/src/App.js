import { useState } from 'react';
import Register from './components/Register';
import LogIn from './components/LogIn';
import './App.css';
import Tasks from './components/Tasks'
import BinToggle from './components/BinToggle'

function App() {
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLogInShown, setIsLogInShown] = useState(false);

  function registerClick (event){
    if (isLogInShown) {
      setIsLogInShown(current => !current);
    }
    setIsRegisterShown(current => !current);

  }

  function logInClick (event){
    if (isRegisterShown) {
      setIsRegisterShown(current => !current);
    }
    setIsLogInShown(current => !current);
  }

  return (
    <div className="App">
      <BinToggle />
      <header className="App-header">
      <div id="title">
        <div id="title-to">to-</div>
        <div id="title-do">do</div>
      </div>

      <div id="header-buttons">
        <button className="header-btn" id="login" onClick={logInClick}>sign in</button>
        <button className="header-btn" id="register" onClick={registerClick}>register</button>
      </div>

      </header>
      <main>
        {isRegisterShown && <Register setIsRegisterShown={setIsRegisterShown}/>}
        {isLogInShown && <LogIn setIsLogInShown={setIsLogInShown}/>}
      <Tasks />
      </main>
    </div>
  );
}

export default App;
