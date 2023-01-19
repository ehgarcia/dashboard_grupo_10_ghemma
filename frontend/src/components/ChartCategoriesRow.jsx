import React, { Fragment } from "react";

export function ChartCategoriesRow (props) {
  return (
    <Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.total}</td>
      </tr>
    </Fragment>
  );
}
