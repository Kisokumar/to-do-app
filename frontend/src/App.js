import { useState } from 'react';
import Register from './components/Register';
import LogIn from './components/LogIn';
import './App.css';

function App() {
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLogInShown, setIsLogInShown] = useState(false);

  function registerClick (event){
    // 👇️ toggle shown state
    setIsRegisterShown(current => !current);
  }

  function logInClick (event){
    // 👇️ toggle shown state
    setIsLogInShown(current => !current);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={registerClick}>Register</button>
        {isRegisterShown && <Register setIsRegisterShown={setIsRegisterShown}/>}
        <button onClick={logInClick}>Log in</button>
        {isLogInShown && <LogIn setIsLogInShown={setIsLogInShown}/>}
      </header>
    </div>
  );
}

export default App;
