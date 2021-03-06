import React from "react";
import myschool from "../components/myschool"

const Professor = () => {
  const {professor} = myschool;

  return (
    <div className="professor">
      <table border='1'>
        <thead>
          <th>교수번호</th>
          <th>교수이름</th>
          <th>아이디</th>
          <th>직급</th>
          <th>급여</th>
          <th>입사일</th>
          <th>보직수당</th>
          <th>소속학과번호</th>
        </thead>
        <tbody>
          {professor.map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.position}</td>
                <td>{v.sal}</td>
                <td>{v.hiredate}</td>
                <td>{v.comm}</td>
                <td>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

}

export default Professor;