import {createBrowserRouter} from "react-router-dom";

import Login from "../page/Login/index.jsx"
import Article from "../page/Article/index.jsx";
import Layout from "../page/Layout/index.jsx";
import Board from "../page/Board/index.jsx";
import About from "../page/About/index.jsx";
import NotFound from "../page/NotFound/index.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Board/>
      },
      {
        path: 'About',
        element: <About/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/article/:id/:name',
    element: <Article/>
  },
  {
    path: '*',
    element: <NotFound/>,
  }
]);

export default router
