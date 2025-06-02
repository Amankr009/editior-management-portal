import React from "react";

/* Styles */
import "../styles/date-picker.scss";

/* Icons */
import calender from "../icons/calender.png";

const DatePicker = ({ value }) => {
  const dateParts = new Date(value);
  const yyyy = dateParts.getFullYear();
  const mm = String(dateParts.getMonth() + 1).padStart(2, "0");
  const dd = String(dateParts.getDate()).padStart(2, "0");
  const formatted = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="date-input-wrapper">
      <input
        type="date"
        className="date-input"
        value={formatted}
      />
      <img className="calendar-icon" style={{cursor: "pointer"}} src={calender} alt="calender" />
    </div>
  );
};

export default DatePicker;
