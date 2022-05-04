import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [starRow, setStarRow] = useState(0);
  const myResult = useRef();

  const starRowHandler = (count) => {
    setStarRow(count);
  };

  const printStar = useEffect(() => {
    let stars = `\n`;
    for (let i = 0; i < starRow; i++) {
      for (let j = 0; j < i + 1; j++) {
        stars += "*";
      }
      stars += `\n`;
    }
    myResult.current.innerHTML = stars;
  }, []);

  return (
    <div>
      <h1>연습문제 - 별찍기</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
      <label htmlFor="myStar">단 수: </label>
      <input
        type="number"
        id="myStar"
        ref={myStar}
        onChange={(e) => {
          printStar(e.currentTarget.value);
        }}
      />
      <hr />
      <div ref={myResult}></div>
    </div>
  );
};

export default App;
