import React, { Fragment, useState, useEffect } from "react";
import { ChartUsersRow } from "./ChartUserRow";


let tableRowsData = [
    {
      id: "Cargando...",
      nombre: "Cargando...",
      apellido: "Cargando...",
      email: "Cargando...",
    }
  ]

export function UsersRow() {
  let [users, setUsers] = useState(tableRowsData);

  useEffect(() => {
    fetch("http://localhost:3050/api/users")
      .then((response) => response.json())
      .then((data) => {
        const { users } = data;
        setUsers(users);
      });
  }, []);

  return (
    <Fragment>
      {users ? (
        <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, i) => {
                    return <ChartUsersRow {...user} key={i} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ) : tableRowsData}
    </Fragment>
  );
}
