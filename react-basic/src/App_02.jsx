import React, {useState} from 'react'

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
// const MsgContext = createContext(undefined)
//
// function A() {
//   return (
//     <div>
//       this is A component
//       <B/>
//     </div>
//   )
// }
//
// function B() {
//   // 3. 在底层组件 通过useContext钩子函数使用数据
//   const msg = useContext(MsgContext)
//   return (
//     <div>
//       this is B component,{msg}
//     </div>
//   )
// }
//
// function App_02() {
//   const msg = 'this is app msg'
//   return (
//     <div>
//       {/* 2. 在顶层组件 通过Provider组件提供数据 */}
//       <MsgContext.Provider value={msg}>
//         this is App
//         <A/>
//       </MsgContext.Provider>
//     </div>
//   )
// }


// 副作用函数-基础
// function App_02() {
//   const [count, setCount] = useState(0)
//   // 1. 没有依赖项 - (组件初始渲染 + 组件更新时执行)
//   // useEffect(() => {
//   //   console.log("调用副作用函数")
//   // })
//   // 2. 空数组依赖项 - (只在初始渲染时执行一次 )
//   // useEffect(() => {
//   //   console.log("调用副作用函数")
//   // }, [])
//   // 3. 添加特定依赖项 - (组件初始渲染 + 依赖项变化时执行)
//   useEffect(() => {
//     console.log("调用副作用函数")
//   }, [count])
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count++</button>
//     </div>
//   )
// }


// 副作用函数-清除副作用
// function Son() {
//   // 1. 渲染时开启一个定时器
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('定时器执行中...')
//     }, 1000)
//
//     return () => {
//       // 清除副作用(组件卸载时)
//       clearInterval(timer)
//     }
//   }, [])
//   return <div>this is son</div>
// }
//
// function App_02() {
//   // 通过条件渲染模拟组件卸载
//   const [show, setShow] = useState(true)
//   return (
//     <div>
//       {show && <Son/>}
//       <button onClick={() => setShow(false)}>卸载Son组件</button>
//     </div>
//   )
// }


// 封装自定义HooK
// 问题：该切换逻辑与当前逻辑耦合在一起，不方便
// 解决思路：自定义Hook
// function App_02() {
//   const [show, setShow] = useState(true)
//   const toggle = () => setShow(!show)
//   return (
//     <div>
//       {show && <div>this is div</div>}
//       <button onClick={toggle}>toggle</button>
//     </div>
//   )
// }

// hook使用规则
// 1. 只能在组件中或者其他自定义Hook函数中调用
// 2. 只能在组件的顶层调用，不能嵌套在if、for、其它的函数中

// 封装自定义hook通用思路
// 1. 声明一个以use打头的函数
// 2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
// 3. 把组件中用到的状态或者回调return出去（以对象或者数组）
// 4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用
function useToggle () {
  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)
  return {
    show,
    toggle
  }
}

function App_02() {
  const {show,toggle} = useToggle()
  return (
    <div>
      {show && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App_02
