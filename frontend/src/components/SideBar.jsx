import React, { Fragment } from "react";
import logo from "../assets/images/logo-DH.png";
import { Link, Routes, Route } from "react-router-dom";
import { ContentWrapper } from "./ContentWrapper";
import { Products } from "./Products";
import { NotFound404 } from "./NotFound404";
import { Categories } from "./Categories";
import { UsersRow } from "./UsersRow";

export function SideBar() {
  return (
    <Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Ghemma</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Products</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Categories</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-table"></i>
            <span>Users</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<ContentWrapper />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/users" element={<UsersRow />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Fragment>
  );
}
