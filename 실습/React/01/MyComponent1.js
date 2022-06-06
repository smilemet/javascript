import React from "react";

import MySubComponet from './MySubComponent';

const MyComponent1 = () => {
  return (
    <div>
      <h2>안녕하세요 리액트</h2>
      <p>리액트 컴포넌트 구조 연습입니다.</p>
      <MySubComponet/>
      <MySubComponet/>
      <MySubComponet/>
    </div>
  )
}

export default MyComponent1;