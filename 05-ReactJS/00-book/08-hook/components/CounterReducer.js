import React, { useReducer } from "react";

// 컴포넌트 업데이트 로직 분리
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
};

const Counter = () => {
  // useReducer의 파라미터 -> 1. 리듀서 함수 2. 해당 리듀서의 기본값
  // 상태값 state와 dispatch 함수 반환
  // dispatch 함수에 action을 발생시키는 값을 전달하면 state가 변경되도록 구성
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      {/* 이벤트 발생 시 setter함수 호출 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
