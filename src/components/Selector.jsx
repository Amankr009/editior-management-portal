import React from "react";

/* Styles */
import "../styles/task-actions.scss";

/* Icons */
import cross from "../icons/cross.png";
import add from "../icons/add.png";

const Selector = ({value}) => {
  return (
    <div className="author-selector">
      <div className="author" key={value}>
        {value}
        <img className="remove-icon" style={{cursor: "pointer"}} src={cross} alt="cross" />
      </div>
    <img className="add-icon" style={{cursor: "pointer"}} src={add} alt="add" />
  </div>
  );
};

export default Selector;