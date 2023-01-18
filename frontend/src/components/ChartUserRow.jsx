import React, { Fragment } from "react";

export function ChartUsersRow(props) {
  return (
    <Fragment>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
      </tr>
    </Fragment>
  );
}
