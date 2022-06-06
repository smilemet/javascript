import React from "react";
import { useLocation } from "react-router-dom";


const DepartmentGet = () => {
  console.clear();

  const location = useLocation(); // url 관련 데이터가 들어있는 메서드
  const {search} = location; // 쿼리스트링만 뽑아냄
  const query = new URLSearchParams(search); // 쿼리스트링을 담은 검색용 객체 생성

  // 백엔드 대용 -> 이후에 ajax로...
  const departmentList = {
    items: [
      {id: 101, dname: "컴퓨터공학과", loc: "1호관"},
      {id: 102, dname: "멀티미디어학과", loc: "2호관"}
    ]
  };

  // url에서 id값 가져옴
  const id = parseInt(query.get('id'));

  // id로 찾아낸 item을 담을 변수
  let departmentItem = null;

  departmentList.items.some((item, i) => {
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

export default DepartmentGet;