import React from "react";

const UserForm = ({ user, updateField, save, clear }) => (
  <div className="form">
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="form-group">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={updateField}
            placeholder="Digite o nome..."
            required
          />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={updateField}
            placeholder="Digite o email..."
            required
          />
        </div>
      </div>
    </div>

    <hr />

    <div className="row">
      <div className="col-12 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={save}>
          Salvar
        </button>
        <button className="btn btn-primary ml-2" onClick={clear}>
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

export default UserForm;
