import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        {/* 
        이 태그들에 value 넣어줄 필요 없을 것 같은데 맞는지 확인하기
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
        */}
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

export default Info;
