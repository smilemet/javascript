import React from "react";
import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";
import Counter from "./pages/Counter";
import Department from "./pages/Department";

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <nav>
        <MenuLink to="/counter">Counter</MenuLink>
        <MenuLink to="/department">Department</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </div>
  );
};

// 렌더링 결과를 메모이징(Memoizing)함으로써, 불필요한 리렌더링을 건너뛴다.
// 함수형 컴퍼넌트가 같은 props로 자주 렌더링 될거라 예상될 때 사용
export default React.memo(App);
