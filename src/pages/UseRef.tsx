import * as React from "react";

const UseRef = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [input, setInput] = React.useState<string>("");

  console.log(">>>pre-render");

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
