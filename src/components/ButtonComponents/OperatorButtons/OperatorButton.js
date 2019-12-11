import React from "react";

const OperatorButton = props => {
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

export default OperatorButton;
