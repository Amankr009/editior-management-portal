import React from "react";

/* Styles */
import "../styles/option-selector.scss";

/* Icons */
import selector from "../icons/selector.png";

const OptionsSelector = ({name, handleClick}) => {
  return (
    <div className="option-wrap" onClick={() => handleClick()}>
      <div className="option-icon">
        <img src={selector} alt="selector" />
      </div>
      <span className="option-name">{name}</span>
    </div>
  );
};

export default OptionsSelector;