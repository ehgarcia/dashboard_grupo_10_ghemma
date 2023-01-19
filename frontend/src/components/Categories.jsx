import React, { Fragment, useState, useEffect } from "react";
import { ChartCategoriesRow } from "./ChartCategoriesRow"

let tableRowsData = [
  {
    Category: "Loanding...",
    Total: "Loanding...",
  }
]
export function Categories() {
  let [users, setUsers] = useState(tableRowsData);

  useEffect(() => {
    fetch("http://localhost:3050/api/pxc")
      .then((response) => response.json())
      .then((data) => {
        const dataToJson = JSON.stringify(data);
        console.log(dataToJson)
        setUsers(dataToJson);
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
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, i) => {
                    return <ChartCategoriesRow {...user} key={i} />;
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
