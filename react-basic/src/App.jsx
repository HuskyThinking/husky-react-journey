// JSX高频场景-JS表达式
const message = 'this is message'

function getAge() {
  return 18
}

// JSX高频场景-列表渲染
const list = [
  {id: 1001, name: 'Vue'},
  {id: 1002, name: 'React'},
  {id: 1003, name: 'Angular'}
]

// JSX高频场景-条件渲染
const flag = true
const loading = true

// JSX高频场景-复杂条件渲染
function getArticleJSX(type) {
  if (type === 0) {
    return <div>无图模式模版</div>
  } else if (type === 1) {
    return <div>单图模式模版</div>
  } else if(type === 3)
  {
    return <div>三图模式模版</div>
  }
}

function App() {
  return (<>
    {/*<div>*/}
    {/*  <h2>JSX高频场景-JS表达式</h2>*/}
    {/*   字符串识别 */}
    {/*  <p>{'this is str'}</p>*/}
    {/*   变量识别 */}
    {/*  <p>{message}</p>*/}
    {/*   方法调用 */}
    {/*  <p>{new Date().getFullYear()}</p>*/}
    {/*   函数调用 渲染为函数的返回值 */}
    {/*  <p>{getAge()}</p>*/}
    {/*   使用js变量 */}
    {/*  <div style={{color: 'red'}}>this is div</div>*/}
    {/*</div>*/}

    {/*<div>*/}
    {/*  <h2>JSX高频场景-列表渲染</h2>*/}
    {/*  <ul>*/}
    {/*    {list.map(item =>*/}
    {/*      <li key={item.id}>{item.name}</li>*/}
    {/*    )}*/}
    {/*  </ul>*/}
    {/*</div>*/}

    {/*<div>*/}
    {/*  <h2>JSX高频场景-条件渲染</h2>*/}
    {/*  {flag && <span>this is span</span>}<br/>*/}
    {/*  {loading ? <span>loading...</span> : <span>this is span</span>}*/}
    {/*</div>*/}

    <div>
      <h2>JSX高频场景-复杂条件渲染</h2>
      {getArticleJSX(1)}
    </div>
  </>)
}

export default App
