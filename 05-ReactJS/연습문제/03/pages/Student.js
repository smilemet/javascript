import React from "react";
import myschool from "../components/myschool"

const Professor = () => {
  const {student} = myschool;

  return (
    <div className="student">
      <table border='1'>
        <thead>
          <th>학생번호</th>
          <th>학생이름</th>
          <th>학년</th>
          <th>아이디</th>
          <th>주민번호</th>
          <th>생년월일</th>
          <th>연락처</th>
          <th>키</th>
          <th>몸무게</th>
          <th>소속학과번호</th>
          <th>담당교수번호</th>
        </thead>
        <tbody>
          {student.map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.grade}</td>
                <td>{v.idnum}</td>
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

}

export default Professor;