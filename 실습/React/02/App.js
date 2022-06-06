import React from "react";
import {Link, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import DepartmentGet from "./pages/DepartmentGet";
import DepartmentPath from "./pages/DepartmentPath";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr/>

      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main(SubRoute)]</Link>
        {/** HTTP GET :: 변수 이름이 노출되므로 보안에 bad */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
        {/** PAHT :: 폴더 형식으로 url을 감춘 것 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
      </nav>

      <a href="/">일반링크</a>
      
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/main/*' element={<Main/>}/>
        {/** HTTP GET */}
        <Route path='/department_get' element={<DepartmentGet/>}/>
        {/** HTTP Path */}
        <Route path='/department_path/:id/:msg' element={<DepartmentPath/>}/>
        {/** Error page */}
        <Route path='/*' element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App;