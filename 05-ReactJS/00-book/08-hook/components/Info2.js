import React, { useState } from "react";

const Info = () => {
  // 상태값을 객체로 관리함으로써 useState를 여러번 선언하지 않아도 ok
  const [userID, setUserID] = useState({
    name: "",
    nickname: "",
  });

  const onChangeName = (e) => {
    // 기존 상태값을 복사('...rest')해주지 않으면 빈칸으로 초기화되므로 꼭!
    setUserID({ ...userID, name: e.target.value });
  };

  const onChangeNickname = (e) => {
    setUserID({ ...userID, nickname: e.target.value });
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} />
        <input onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {userID.name}
        </div>
        <div>
          <b>닉네임:</b> {userID.nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
