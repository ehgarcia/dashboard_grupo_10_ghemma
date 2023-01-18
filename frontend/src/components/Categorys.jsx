import React, { Fragment } from "react";

export function Categorys(props) {
  return (
    <Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{props.name}</div>
        </div>
      </div>
    </Fragment>
  );
}
