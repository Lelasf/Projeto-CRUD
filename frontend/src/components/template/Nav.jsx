/* eslint-disable import/no-anonymous-default-export */

import "./Nav.css";
import React from "react";
import NavLink from "./NavLink";

export default (props) => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavLink />
      </nav>
    </aside>
  );
};
