import Spinner from "./Spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Student = ({ deptno }) => {
  console.log(deptno);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState([]);

  // deptno에 따라 목록 조회
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3001/student?deptno=${deptno}`);
        setStudent(res.data);
      } catch (e) {
        alert("axios 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
      console.log(student);
    })();
  }, [deptno]);

  return (
    <div>
      <Spinner visible={loading} />
      <h2>학생목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>학번</th>
            <th>이름</th>
            <th>아이디</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.grade}</td>
                <td>{v.idnum.substring(0, 6)}-*******</td>
                <td>{v.birthdate}</td>
                <td>{v.tel}</td>
                <td>{v.height}</td>
                <td>{v.weight}</td>
                <td>{v.deptno}</td>
                <td>{v.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Student.defaltProps = {
  deptno: -1,
};

Student.propTypes = {
  deptno: PropTypes.number,
};

export default Student;
