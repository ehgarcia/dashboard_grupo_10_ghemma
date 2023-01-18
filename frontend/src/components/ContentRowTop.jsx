import React, { Fragment, useEffect, useState } from "react";
import { Devices } from './Devices'
import {UsersAccounts} from './UsersAccounts'
import { LastProduct } from './LastProduct'
import { Categorys } from './Categorys'


export function ContentRowTop() {

	const [category, setCategory] = useState(null)

    useEffect (() => {
      fetch("http://localhost:3050/api/categorys", { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data)
      })
    }, [])


  return (
    <Fragment>
		{ category ? (
      			<div className="container">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard Ghemma Store</h1>
					</div>
				

					<div className="row d-flex justify-center">

					<Devices />
					<UsersAccounts />

					</div>

					<div className="row">

						<LastProduct />

						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Categories in Database</h5>
								</div>

								<div className="card-body">
									<div className="row">

									{
										category.map( ( row , i) => {
											return <Categorys { ...row} key={i}/>
										})
									}

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
) : null}
    </Fragment>
  )
}
