/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../template/Main";

export default (props) => {
  return (
    <Main icon="home" title="Início" subtitle="Projeto CRUD do curso de React">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a construção de um cadastro desenvolvido em
        React!
      </p>
    </Main>
  );
};
