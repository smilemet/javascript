import React from "react";

const MyCallback = () => {
  const [myText, setMyText] = React.useState("Hello React");

  // 컴포넌트가 최초 렌더링될 때 1회만 이벤트 핸들러 함수를 정의하고 이후 재사용
  // 두번째 파라미터에 특정 state값을 지정할 경우 해당 값이 수정될 때만 이벤트 정의
  // --> 이벤트 핸들러의 중복 정의를 방지, 성능 up
  const onInputChange = React.useCallback((e) => {
    setMyText(e.currentTarget.value);
  }, []);

  return (
    <div>
      <h2>MyCallback</h2>
      <h3>{myText}</h3>
      <input type="text" placeholder="input..." onChange={onInputChange} />
    </div>
  );
};

export default MyCallback;
