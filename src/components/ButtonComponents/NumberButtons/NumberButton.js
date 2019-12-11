import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button
        onClick={() => props.clickHandler(props.buttonName)}
        className="button operator"
      >
        {props.buttonName}
      </button>
    </>
  );
};
export default NumberButton 