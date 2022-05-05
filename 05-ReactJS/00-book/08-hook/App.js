import React, { useState } from "react";

import Counter from "./components/Counter";
import Info from "./components/Info";
import InfoEffect from "./components/InfoEffect";
import CounterReducer from "./components/CounterReducer";
import InfoReducer from "./components/InfoReducer";
import Average from "./components/Average";
import AverageMemo from "./components/AverageMemo";
import AverageCB from "./components/AverageCB";
import AverageRef from "./components/AverageRef";
import RefSample from "./components/RefSample";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <hr />

      <h1>Info</h1>
      <Info />
      <hr />

      <h1>InfoEffect</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <InfoEffect />}
      <hr />

      <h1>CounterReducer</h1>
      <CounterReducer />
      <hr />

      <h1>InfoReducer</h1>
      <InfoReducer />
      <hr />

      <h1>Average</h1>
      <Average />
      <hr />

      <h1>AverageMemo</h1>
      <AverageMemo />
      <hr />

      <h1>AverageCB</h1>
      <AverageCB />
      <hr />

      <h1>AverageRef</h1>
      <AverageRef />
      <hr />

      <h1>RefSample</h1>
      <RefSample />
      <hr />
    </div>
  );
};

export default App;
