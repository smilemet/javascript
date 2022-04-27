// react 기본 패키지 참조(필수)
import React from 'react';
import MySubComponet from './MySubComponent';

const MyComponent2 = () => {
  return (
    <div>
      <h2>Virtual DOM</h2>
      <p>This is React Component</p>

      <MySubComponet />
      <MySubComponet />
      <MySubComponet />
    </div>
  );
}

export default MyComponent2;