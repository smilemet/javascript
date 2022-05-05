import React, { useReducer } from "react";

// action 태그를 받아 state를 업데이트
const reducer = (state, action) => {
  return {
    ...state,
    // 키값 구분을 하기 위해 name 속성 활용
    [action.name]: action.value,
  };
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;

  // 이벤트 핸들러
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" onChange={onChange} />
        <input name="nickname" onChange={onChange} />
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
