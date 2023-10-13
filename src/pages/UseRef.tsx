import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");

  console.log(">>>pre-render");
  //console.log(input);
  useEffect(() => {
    console.log(inputRef.current?.value);
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={() => alert(inputRef.current?.value)}>
        Click me
      </button>
      {/* <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => alert(input)}>Click me</button> */}
    </>
  );
};

export default UseRef;
