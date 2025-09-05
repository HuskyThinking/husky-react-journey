import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      一级路由
      <br/>
      <Link to="/">to Board</Link>
      <br/>
      <Link to="/about">to About</Link>

      {/*二级路由出口*/}
      <Outlet/>
    </div>
  )
}

export default Layout
