// (1) 리액트 패키지 참조(모든 js 파일의 최상단에서 필수명시)
import React from "react";

// (3-1) 직접 작성한 컴포넌트 참조
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';

/**
 * (2) App이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위) 정의
 * 프로젝트에서 컴포넌트를 랜더링(화면출력)하면 함수에서 반환하고 있는 내용이 브라우저에 나타남
 * 반환되는 HTML 코드는 JSX 문법 사용
 * JSX --> XML과 비슷한 React 전용 Javascript 확장 문법
 */
function App() {
  return (
    <div>
      <h1>Hello React</h1>

      {/* (3-2) MyComponent1와 MyComponent2라는 이름의 컴포넌트 출력 */}
      <MyComponent1></MyComponent1>
      <MyComponent2/>
    </div>
  );
}

export default App;