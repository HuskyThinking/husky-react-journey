function AppInput(props) {
  const { type, value, setValue, className } = props;
  return (
    <input
      type={type}
      value={value}
      className={className}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default AppInput;
