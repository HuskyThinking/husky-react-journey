import { useState } from 'react';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameClass =
    username.length <= 2 && username.length > 0 ? 'input-error' : '';
  const passwordClass =
    password.length <= 2 && password.length > 0 ? 'input-error' : '';

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.length || !password.length) {
      alert('Invalid username or password');
      return;
    }

    alert(`Username: ${username} Password: ${password}`);

    setUsername('');
    setPassword('');
  }

  return (
    <main>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <UsernameInput
          username={username}
          usernameClass={usernameClass}
          setUsername={setUsername}
        />
        <br />
        <PasswordInput
          password={password}
          passwordClass={passwordClass}
          setPassword={setPassword}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default App;
