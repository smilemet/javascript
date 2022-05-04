import React from "react";
import dayjs from "dayjs";

const MyMemo = () => {
  // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
  React.useEffect(() => console.clear(), []);

  const day = dayjs;

  // 파라미터로 전달되는 단어의 길이를 반환하는 함수 --> 처리비용이 매우 큰 함수 가정
  // const getLength
  return <div></div>;
};

export default MyMemo;
