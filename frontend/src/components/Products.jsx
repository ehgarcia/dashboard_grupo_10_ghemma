import React, { Fragment, useState, useEffect } from "react";
import { ChartProductRow } from "./ChartProductRow";

export function Products() {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3050/api/products", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setProduct(products);
      });
  }, []);



  return (
    <Fragment>
      {product ? (
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
                    <th>Price</th>
                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  {product.map((producting, i) => {
                    return <ChartProductRow {...producting} key={i} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </Fragment>
  );
}