import React, {createContext, useContext} from 'react'

// React表单控制-受控绑定
/*function App_02() {
  const [value, setValue] = useImmer("");
  return (<>
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </>)
}*/

// React表单控制-非受控绑定
/*function App_02() {
  const inputRef = useRef(null)
  const onChange = () => {
    console.log(inputRef.current.value)
  }
  return (<>
    <input
      type="text"
      ref={inputRef}
      onChange={onChange}
    />
  </>)
}*/


// React组件通信-父传子
/*function Son(props) {
  console.log(props)
  return <div>this is son, {props.name}, {props.children}</div>
}

function App_02() {
  const name = 'this is app name'
  return (<div>
    <Son name={name}>
      <span>this is span</span>
    </Son>
  </div>)
}*/

// React组件通信-子传父
/*function Son({onGetMsg}) {
  const sonMsg = 'this is son msg'
  return (
    <div>
      {/!* 在子组件中执行父组件传递过来的函数 *!/}
      <button onClick={() => onGetMsg(sonMsg)}>send</button>
    </div>
  )
}

function App_02() {
  const [msg, setMsg] = useImmer('msg')
  const getMsg = (msg) => {
    setMsg(msg)
  }
  return (
    <div>
      this is App, {msg}
      {/!* 传递父组件中的函数到子组件 *!/}
      <Son onGetMsg={getMsg}/>
    </div>
  )
}*/

// React组件通信-兄弟组件通信
// 1. 通过子传父 A -> App
// 2. 通过父传子 App -> B
/*function A({onGetAName}) {
  // Son组件中的数据
  const name = 'this is A name'
  return (
    <div>
      this is A compnent,
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  )
}

function B({name}) {
  return (
    <div>
      this is B compnent,
      {name}
    </div>
  )
}

function App_02() {
  const [name, setName] = useImmer('')
  const getAName = (name) => {
    setName(name)
  }
  return (
    <div>
      this is App
      <A onGetAName={getAName}/>
      <B name={name}/>
    </div>
  )
}*/

// React组件通信-跨层组件通信
// App -> A -> B
// 1. createContext方法创建一个上下文对象
const MsgContext = createContext(undefined)

function A() {
  return (
    <div>
      this is A component
      <B/>
    </div>
  )
}

function B() {
  // 3. 在底层组件 通过useContext钩子函数使用数据
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B component,{msg}
    </div>
  )
}

function App_02() {
  const msg = 'this is app msg'
  return (
    <div>
      {/* 2. 在顶层组件 通过Provider组件提供数据 */}
      <MsgContext.Provider value={msg}>
        this is App
        <A/>
      </MsgContext.Provider>
    </div>
  )
}

export default App_02
