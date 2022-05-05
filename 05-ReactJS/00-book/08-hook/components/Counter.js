import React, { useState } from "react";

const Counter = () => {
  // useState 사용 :: 상태값, 상태값의 setter함수 설정
  // useState 호출 -> 배열 반환 -> 구조분해문법으로 명명
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      {/* 이벤트 발생 시 setter함수 호출 */}
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
