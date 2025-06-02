import React from "react";

/* Styles */
import "../styles/header-with-search.scss";

/* Icons */
import search from "../icons/search.png";

const HeaderWithSearch = ({title}) => {
  return (
    <div className="search-container">
      <div className="title-cls">{title}</div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <img src={search} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSearch;