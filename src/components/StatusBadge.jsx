import React from "react";

/* Styles */
import "../styles/status-badge.scss";

const StatusBadge = ({status}) => {
  const blueTheme = ["In progress", "Completed", "High"];
  const yellowTheme = ["To do"];
  const theme = blueTheme.includes(status) ? "blue-theme" : yellowTheme.includes(status) ? "yellow-theme" : "";
  const cls = `status-badge ${theme}`;
  return (
    <div className={cls}>
        {status}
    </div>
  );
};

export default StatusBadge;