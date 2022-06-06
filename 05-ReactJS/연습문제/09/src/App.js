import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Professor from "./components/Professor";
import Spinner from "./components/Spinner";
import Student from "./components/Student";

const App = () => {
  // 로딩 바
  const [loading, setLoading] = useState(false);
  // 데이터
  const [data, setData] = useState([]);
  // deptno 전달
  const [deptno, setDeptno] = useState(false);

  // 확과명 데이터 가져오기
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3001/department");
        setData(res.data);
      } catch (e) {
        alert("axios 오류가 났어요");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 드롭다운 클릭
  const onDropdown = useCallback((e) => {
    const option = e.target.selectedIndex;
    const deptno = e.target[option].dataset.deptno;
    setDeptno(Number(deptno));
  }, []);

  return (
    <div>
      {/* 로딩 아이콘 */}
      <Spinner visible={loading} />
      <h1>Exam 09</h1>
      <hr />

      {/* 드롭다운 */}
      <select onChange={onDropdown}>
        <option value="">-- 학과명 --</option>
        {data.map((v) => {
          return (
            <option key={v.id} value={v.dname} data-deptno={v.id}>
              {v.dname}
            </option>
          );
        })}
      </select>

      <Student deptno={deptno} />
      <Professor deptno={deptno} />
    </div>
  );
};

export default App;
