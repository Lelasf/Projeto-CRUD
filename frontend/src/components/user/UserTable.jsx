import React from "react";

const UserTable = ({ users, load, remove }) => (
  <table className="table mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger" onClick={() => remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
