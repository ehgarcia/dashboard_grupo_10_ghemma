import React, { Fragment } from "react";

export function ChartUsersRow(props) {
  return (
    <Fragment>
      <tr>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.apellido}</td>
        <td>{props.email}</td>
      </tr>
    </Fragment>
  );
}
