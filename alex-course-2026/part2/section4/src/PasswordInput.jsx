function PasswordInput({ password, passwordClass, setPassword }) {
  return (
    <input
      type="password"
      value={password}
      className={passwordClass}
      onChange={(event) => setPassword(event.target.value)}
    />
  );
}

export default PasswordInput;
