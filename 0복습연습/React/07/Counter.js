import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
