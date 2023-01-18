import React, { Fragment } from "react";

export function ChartProductRow(props) {


  return (
    <Fragment>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.category_id}</td>
      </tr>
    </Fragment>
  );
}
