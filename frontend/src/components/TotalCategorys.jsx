import React, { Fragment, useEffect, useState } from "react";

export function TotalCategorys() {

	const [category, setCategory] = useState(null)

    useEffect (() => {
      fetch("http://localhost:3050/api/categorys", { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
    }, [])

  return (
    <Fragment>
        { category ? (
            <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Categories</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{category.length}</div>
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

