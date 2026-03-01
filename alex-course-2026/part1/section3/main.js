function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert(`username: ${username} password: ${password}`);
    setUsername('');
    setPassword('');
  }

  return (
    <main
      style={{
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            margin: '2px',
          }}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          style={{
            margin: '2px',
          }}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button
          style={{
            margin: '1rem',
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
