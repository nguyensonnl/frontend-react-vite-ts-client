import React from "react";

const ReactMemoChild = () => {
  console.log(">>>Pre-render child");
  return (
    <div>
      <div>Hello world </div>
    </div>
  );
};

export default React.memo(ReactMemoChild);
