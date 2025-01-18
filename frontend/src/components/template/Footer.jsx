/* eslint-disable import/no-anonymous-default-export */
import "./Footer.css";
import React from "react";

export default (props) => {
  return (
    <footer className="footer">
      <p>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por
        <strong>
          {" "}
          Cod<span className="text-danger">3</span>r
        </strong>
      </p>
    </footer>
  );
};
