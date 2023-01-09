import React, { Fragment, useEffect, useState } from "react";

export function Devices() {

    const [product, setProduct] = useState(null)

    useEffect (() => {
      fetch("http://localhost:4000/api/products", { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data)
      })
    }, [])

  return (
    <Fragment>
        { product ? (
            <div className="col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Devices In Database</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{product.length}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : null}
    </Fragment>
  );
}

