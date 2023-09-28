import React, { useState } from "react";
import ReactMemoChild from "../components/ReactMemoChild";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  console.log(">>>Pre-render");
  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount((pre) => pre + 1)}>Click</button>

      <ReactMemoChild />
    </React.Fragment>
  );
};

export default ReactMemo;
