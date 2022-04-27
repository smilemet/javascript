import React from "react";

const Expr = () => {
  // 사용자 정의 변수
  const name = '리액트';
  const age = 19;
  const color = '#f00';
  const message = "리액트는 가장 주목받는 프론트앤드 프레임워크입니다."

  // 개발자 정의 함수
  const myEllipsis = (message, len) => {
    let str = message;
    if (str.length > len) {
      str = str.substring(0, len) + '...';
    }

    return str;
  };

  return (
    <div>
      <h2>
        Expr <small>(jsx 기본 표현식)</small>
      </h2>

      <h3>
        {/* 기본 변수 출력하기 - 간단한 사칙연산 가능 */}
        {name}님은 {age + 1}세 입니다.
      </h3>
      <p>
        <font color='#00f'>{name}</font>님은 
        {/* HTML 속성에 변수를 출력할 경우 따옴표 사용 X */}
        <font color={color}>리액트 개발자</font>입니다.
      </p>

      {/* 사용자 정의 함수 호출하기 */}
      <blockquote>{myEllipsis(message, 15)}</blockquote>
    </div>
  );
}

export default Expr;