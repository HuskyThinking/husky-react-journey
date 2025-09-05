import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChannelList} from "./store/modules/channelStore.js";
// import {addToNum, decrement, increment} from "./store/modules/counterStore.js";

// function App_Redux() {
//   const {count} = useSelector((state) => state.counter)
//   const dispatch = useDispatch()
//   return <div>
//     <button onClick={() => dispatch(decrement())}>-</button>
//     <span>{count}</span>
//     <button onClick={() => dispatch(increment())}>+</button>
//     <button onClick={() => dispatch(addToNum(10))}>+10</button>
//   </div>
// }

function App_Redux() {
  const dispatch = useDispatch()
  // 使用数据
  const {channelList} = useSelector(state => state.channel)
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
      <ul>
        {Object.entries(channelList).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default App_Redux
