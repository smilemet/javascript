import Spinner from "./Spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Professor = ({ deptno }) => {
  console.log(deptno);
  const [loading, setLoading] = useState(false);
  const [professor, setProfessor] = useState([]);

  // deptno에 따라 목록 조회
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3001/professor?deptno=${deptno}`);
        setProfessor(res.data);
      } catch (e) {
        alert("axios 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
      console.log(professor);
    })();
  }, [deptno]);

  return (
    <div>
      <Spinner visible={loading} />
      <h2>교수목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>교수번호</th>
            <th>이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소속학과번호</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.position}</td>
                <td>{v.sal}</td>
                <td>{dayjs(v.hiredate).format("YYYY-MM-DD")}</td>
                <td>{v.comm}</td>
                <td>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Professor.defaltProps = {
  deptno: -1,
};

Professor.propTypes = {
  deptno: PropTypes.number,
};

export default Professor;
