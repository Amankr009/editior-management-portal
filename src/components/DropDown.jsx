import React, { useState } from "react";

/* Styles */
import "../styles/drop-down.scss";

/* Icons */
import downarrow from "../icons/downarrow.png";

const Dropdown = ({value, options}) => {
  const [selected, setSelected] = useState(value);
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="dropdown-select">
      <div className="selected" onClick={() => setOpen(!open)}>
        {selected}
        <img className="down-arrow" style={{cursor: "pointer"}} src={downarrow} alt="downarrow" />
      </div>
      {open && (
        <div className="options">
          {options && options.map((option) => (
            <div
              key={option}
              className={`option ${option === selected ? "active" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;