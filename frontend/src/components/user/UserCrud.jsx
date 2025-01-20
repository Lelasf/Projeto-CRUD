/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";
import UserForm from "./UserForm"; // Novo componente para o formulário
import UserTable from "./UserTable"; // Novo componente para a tabela

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de Usuários: Incluir, Lista, Alterar e Excluir",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...initialState };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    axios.get(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    axios[method](url, user).then((resp) => {
      const list = this.updateList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  updateList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      const list = this.updateList(user, false);
      this.setState({ list });
    });
  }

  render() {
    return (
      <Main {...headerProps}>
        <UserForm
          user={this.state.user}
          updateField={(e) => this.updateField(e)}
          save={() => this.save()}
          clear={() => this.clear()}
        />
        <UserTable
          users={this.state.list}
          load={(user) => this.load(user)}
          remove={(user) => this.remove(user)}
        />
      </Main>
    );
  }
}
