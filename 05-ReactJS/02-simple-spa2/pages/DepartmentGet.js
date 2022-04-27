/**
 * HTTP GET 파라미터를 전달받는 페이지
 */
import React from 'react';

// GET 파라미터 추출 기능을 갖는 useLocation()함수를 react-router-dom 패키지로부터 참조함.
import {useLocation} from 'react-router-dom';

const DepartmentGet = () => {
  // 기존의 콘솔 출력 내용 삭제
  console.clear();

  const location = useLocation(); // url 관련 데이터가 들어있는 메서드
  const {search} = location; // 쿼리스트링만 뽑아냄
  const query = new URLSearchParams(search); // 쿼리스트링을 담은 검색용 객체 생성

  // 추출된 변수값과 데이터 타입 확인
  console.group('파라미터 처리 결과 확인');
  console.log(`요청된 학과번호 값=${query.get('id')} (${typeof query.get('id')})`);
  console.log(`요청된 메시지 내용=${query.get('msg')} (${typeof query.get('msg')})`);
  console.groupEnd();

  // 백엔드 대용 -> 이후에 ajax로...
  const departmentList = {
    item: [
      { id: 101, dname: '컴퓨터공학과', loc:'1호관' },
      { id: 102, dname: '멀티미디어학과', loc:'2호관' }
    ]
  };

  // url에서 id의 value를 가져와 정수로 변환 (쿼리스트링은 문자열이므로)
  const id = parseInt(query.get('id'));

  // id로 찾아낸 item을 담을 변수
  let departmentItem = null;

  // 미리 준비한 JSON에서 id값이 일치하는 정보를 조회
  departmentList.item.some((item) => {
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
        <li>학과위치: {departmentItem.loc}</li>
      </ul>
    </div>
  );
}

export default DepartmentGet;