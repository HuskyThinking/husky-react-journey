
function App_02() {
  const clickHandler = (name, e) => {
    console.log('clickHandler', name, e)
  }
  return (<>
    <button onClick={(e) => clickHandler('Jack', e)}>click me</button>
  </>)
}

export default App_02
