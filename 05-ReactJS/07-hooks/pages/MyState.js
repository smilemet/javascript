import React from "react";

/**
 * 상태 유지 값과 그 값을 갱신하는 함수 반환
 */
const MyState = () => {
  /**
   * state(상태)값 정의
   * - const [상태변수명, setter함수] = React.useState(변수기본값);
   * - 상태변수 :: 동적 시스템의 상태를 나타내는 변수. 초기값을 갖는다.
   * - 상태변수 값은 직접 변경 X → 반드시 setter를 통해서만 변경 가능
   * - useState() 함수에 전달하는 값은 state에 대한 초기값
   * - setState() 파라미터는 콜백함수 형태도 가능
   */
  const [myName, setMyName] = React.useState("");
  const [myPoint, setMyPoint] = React.useState(50);

  // 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의
  const onMyNameChange = (e) => {
    setMyName(e.currentTarget.value);
  };

  return (
    <div>
      <h2>MyState</h2>
      <h3>
        {myName}님의 점수는 {myPoint}점 입니다.
      </h3>
      <hr />

      <div>
        {/* HTML은 <label for="..."> */}
        <label htmlFor="myNameInput">이름: </label>
        {/* 이벤트: onChange */}
        <input id="myNameInput" type="text" value={myName} onChange={onMyNameChange} />
      </div>

      <div>
        <label htmlFor="myPointInput">점수: </label>
        <input
          id="myPointInput"
          type="range"
          min="0"
          max="100"
          value={myPoint}
          step="1"
          onChange={(e) => {
            // setter함수가 입력값을 변수에 반영
            setMyPoint(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};

export default MyState;
