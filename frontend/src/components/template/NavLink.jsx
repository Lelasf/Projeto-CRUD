import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <Link to="/">
        <i className="fa fa-home"></i>Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i>Usuários
      </Link>
    </>
  );
};
