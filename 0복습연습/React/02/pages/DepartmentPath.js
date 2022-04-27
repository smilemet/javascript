import React from "react";
import { useParams } from "react-router-dom";


const DepartmentPath = () => {
  console.clear();

  // url 관련 path 데이터가 들어있는 메서드 :: {id: ..., msg: ...} 형태
  const params = useParams(); 

  // 백엔드 대용 -> 이후에 ajax로...
  const departmentList = {
    items: [
      {id: 201, dname: "전자공학과", loc: "3호관"},
      {id: 202, dname: "기계공학과", loc: "4호관"}
    ]
  };

  // path 데이터에서 id값 가져옴
  const id = parseInt(params.id);

  // id로 찾아낸 item을 담을 변수
  let departmentItem = null;

  departmentList.items.some((item) => {
    if (item.id === id) {
      departmentItem = item;
      return true;
    }
    return false;
  });

  // id에 해당하는 item이 없었다면
  if (!departmentItem) {
    return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
  }

  // id에 해당하는 item을 잘 찾았다면
  return (
    <div>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.id}</li>
        <li>학과번호: {departmentItem.loc}</li>
      </ul>
    </div>
  );
}

export default DepartmentPath;