/* eslint-disable import/no-anonymous-default-export */
import { Link } from "react-router-dom";
import "./Logo.css";
import React from "react";

export default (props) => {
  return (
    <aside className="logo">
      <Link to="/">
        Project<span>CRUD</span>
      </Link>
    </aside>
  );
};
