import {createRoot} from 'react-dom/client'
// import App_01 from './App_01.jsx'
// import App_02 from './App_02.jsx'
// import App_Redux from './App_Redux.jsx'
// import App_Router from './App_Router.jsx'
// 导入store
// import store from './store'
// 导入store提供组件Provider
// import {Provider} from 'react-redux'
import {RouterProvider} from "react-router-dom";
import router from "./router/index.jsx";


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App_Redux/>
//     </Provider>
//   </StrictMode>,
// )

// 路由示例
// const router = createBrowserRouter([
//   {
//     path: '/Index.js',
//     element: <div>我是登录页面</div>
//   },
//   {
//     path: '/Index',
//     element: <div>我是文章页</div>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
