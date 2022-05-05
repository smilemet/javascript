import React, { useState } from "react";

// 숫자들의 배열을 받아 평균을 반환하는 함수
const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  // undefined, null을 length = 0으로 처리
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // 입력되는 숫자를 추적
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  // 최종 입력된 숫자를 계산 배열에 추가 후 숫자 초기화
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* 계산 배열에 있는 숫자들을 업데이트 
            (하나 추가 X -> 전부 리렌더링) */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* 렌더링마다 업데이트:: 불필요한 연산 발생 */}
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
