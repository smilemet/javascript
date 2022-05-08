import React from "react";
import sea from "../assets/img/sea.jpg";

/**
 * 모든 렌더링이 완료된 후 side effect를 발생시키는 함수를 인자로 받아 실행
 * useEffect(콜백함수, [필요하다면 조건]) 형태로 작성
 */
const MyEffect = () => {
  // 이미지의 밝기를 위한 상태값
  const [myBrightness, setBirghtness] = React.useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = React.useState(window.innerWidth);

  // 사용자 정의 함수
  const onMyResize = () => setMyWidth(window.innerWidth);

  // 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨
  React.useEffect(() => {
    console.clear();
    console.log(
      `[MyEffect2] ${new Date()} ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨`
    );
  });

  // 이 컴포넌트가 화면에 막 출력됨과 동시에 1회 실행
  React.useEffect(() => {
    // 화면에 진입할 때마다 코드가 갱신됨
    console.log(
      `[MyEffect1] ${new Date()} ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능`
    );
    window.addEventListener("resize", onMyResize);
    // React는 전체가 1페이지이므로 이벤트를 제거해주지 않으면 다른 화면에서도 실행됨
    return () => window.removeEventListener("resize", onMyResize);
  }, []);

  // 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props 값이 변경될 때만 실행됨
  React.useEffect(() => {
    return () => {
      console.log(`[MyEffect3] ${new Date()} ::: myBrightness 값이 변경됨`);
    };
  }, [myBrightness]);

  // state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨
  React.useEffect(() => {
    return () => {
      console.log(
        `[MyEffect4] ${new Date()} ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능`
      );
    };
  });

  return (
    <div>
      <h2>MyEffect</h2>
      <h3>Window Width:{myWidth}</h3>

      <div>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={myBrightness}
          onChange={(e) => {
            setBirghtness(e.currentTarget.value);
          }}
        />
      </div>

      <img
        alt="Hello React"
        src={sea}
        width="480"
        style={{
          filter: `brightness(${myBrightness}%)`,
        }}
      />
    </div>
  );
};

export default MyEffect;
