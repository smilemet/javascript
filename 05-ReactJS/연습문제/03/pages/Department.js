import React from "react";
import myschool from "../components/myschool"

const Department = () => {
  const {department} = myschool;

  return (
    <div className="department">
      <table border='1'>
        <thead>
          <th>학과번호</th>
          <th>학과이름</th>
          <th>위치</th>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;