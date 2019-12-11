import React from "react";
import data from "../../..//data";
const SpecialButton = props => {
  return (
    <>
      <button
        onClick={() => props.clickHandler(props.buttonName)}
        className="button special"
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default SpecialButton;
