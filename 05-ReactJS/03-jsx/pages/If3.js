import React from "react";

/**
 * jsx 조건분기 (3) - 조건식과 '||' 연산자 사용
 * {조건 || (조건이 거짓인 경우 출력할 내용)}
 * 조건인 참인 경우 표시내용 X
 */
const If3 = () => {
  /** 출력할 내용이 없는 경우 
   * -> undefined, null, 0, false, ''(빈문자열) 중 하나를 return할 경우(false) 정상적인 화면 랜더링이 이루어지지 X
   * -> 특히 undefined 변수를 바로 리턴하는 경우 에러
  */
  const articleList = undefined;

  return (
    <div>
      <h2>If3</h2>
      {articleList || <p>조회된 게시글이 없습니다.</p>}
    </div>
  );
}

export default If3;