import React from "react";
import './Search.css'
import searchLogo from '../images/searchstatus.svg'

function search() {
  return (
    <div id="search">
      <span id="logo">
        <img src={searchLogo} />
      </span>
      <span style={{ fontWeight: 300, fontSize: 12 }}>Search topics</span>
    </div>
  );
}

export default search;
