import React from "react";

import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";

function App () {
  return (
    <div>
      <h1>Hello React</h1>

      {/*여기에 주석*/}
      <MyComponent1/>
      <MyComponent2/>
      
      <hello>
        <h1>Test</h1>
      </hello>
    </div>
  )
}

export default App;