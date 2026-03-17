import { useState, useEffect, useRef } from "react";

function BoxColor({ color, value }) {
  const boxRef = useRef(null);
  const [classList, setClassList] = useState("");
  useEffect(() => {
    setClassList(boxRef.current.classList);
  }, [value]);

  const boxCSS = {
    backgroundColor: classList.value === `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color: `${color}`,
  };

  return (
    <>
      <div className={`box ${color}`} ref={boxRef} style={boxCSS}>
        {color === value ? (
          <h2 style={{ color: "black" }}>{`Yes iam a ${value} color`}</h2>
        ) : (
          <h2>{`not iam not a  ${value} color`}</h2>
        )}
      </div>
    </>
  );
}
export default BoxColor;
