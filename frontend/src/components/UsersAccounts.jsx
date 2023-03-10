import React, { Fragment, useEffect, useState } from "react";

export function UsersAccounts() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3050/api/users", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        const { users } = data;
        setUser(users);
      });
  }, []);

  return (
    <Fragment>
      {user ? (
        <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Users Accounts
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {user.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
