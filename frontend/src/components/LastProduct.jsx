import React, { Fragment, useEffect, useState } from "react";

export function LastProduct() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3050/api/products", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setProduct(products);
      });
  }, []);

  const arrayProduct = product;

  return (
    <Fragment>
      {product ? (
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Last Device added in DataBase
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: `40rem` }}
                  src={arrayProduct[arrayProduct.length - 1].image}
                  alt={`${arrayProduct[arrayProduct.length - 1].name}`}
                />
              </div>
              <a
                className="btn btn-danger"
                rel="nofollow"
                href={`http://localhost:3050/api/products/${
                  arrayProduct[arrayProduct.length - 1].id
                }`}
              >
                View Device detail
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
