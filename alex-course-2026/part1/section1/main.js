function App() {
  const [inputText, setInputText] = React.useState('');
  function handleChange(event) {
    const text = event.target.value;
    setInputText(text);
    console.log(`inputText: ${inputText}`);
  }
  return (
    <>
      <h1>Hello from React</h1>
      <input type="text" onChange={handleChange} />
      <p>{inputText}</p>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
