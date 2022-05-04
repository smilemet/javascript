/** import
 * 원래 브라우저 기능 X → 번들러 사용으로 해결 (리액트는 웹팩)
 * 번들러 사용 시 불러온 모듈을 모두 합쳐서 하나의 파일로 생성
 * 
 */
import React from 'react';

function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}

function App() {
  return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}

export default 26p_App;