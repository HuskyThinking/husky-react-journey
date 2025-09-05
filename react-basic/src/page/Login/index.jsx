import {useNavigate} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div>
      I am login
      {/*声明式*/}
      {/*<Link to={"/article"}>文章</Link>*/}
      {/*命令式*/}
      <button onClick={() => navigate("/article")}>跳转至文章</button>
      <button onClick={() => navigate("/article?id=100&name=jack")}>searchParams传参</button>
      <button onClick={() => navigate("/article/1001/jack")}>Params传参</button>
    </div>
  )
}

export default Login
