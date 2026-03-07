import { useState } from 'react';
import AppInput from './AppInput';
import AppButton from './AppButton';

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
        <AppInput
          type="text"
          value={username}
          className={usernameClass}
          setValue={setUsername}
        />
        <br />
        <AppInput
          type="password"
          value={password}
          className={passwordClass}
          setValue={setPassword}
        />
        <br />
        {/* <button className="btn" type="submit">
          Login
        </button>
        <button className="btn" type="submit">
          Sign up
        </button> */}
        <AppButton>Login</AppButton>
        <AppButton>Sign up</AppButton>
      </form>
    </main>
  );
}

export default App;
