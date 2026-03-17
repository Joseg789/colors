import { useRef } from "react";
import { useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const colors = [
    "red",
    "green",
    "pink",
    "yellow",
    "purple",
    "white",
    "blue",
    "aqua",
    "olive",
  ];

  return (
    <>
      <input
        type="text"
        placeholder=" introduce el valor"
        value={value}
        onChange={() => setValue(inputRef.current.value)}
        ref={inputRef}
      />
      <div className="container">
        {colors.map((color, index) => {
          return <BoxColor color={color} value={value} />;
        })}
      </div>
    </>
  );
}

export default MyForm;
