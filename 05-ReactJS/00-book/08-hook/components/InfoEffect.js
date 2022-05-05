import React, { useState, useEffect } from "react";

const InfoEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect 예제
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
  });

  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);

  useEffect(() => {
    console.log("name값이 업데이트될 때만 실행됩니다.");
    // 배열 안에는 상태값 외에 props로 전달받은 값을 넣어도 ok
  }, [name]);

  useEffect(() => {
    console.log("name값이 업데이트될 때만 실행됩니다.");
    return () => {
      console.log("cleanup 함수 실행");
      // 작동 순서 :: cleanup -> 렌더링 -> 조건부
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} />
        <input onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoEffect;
