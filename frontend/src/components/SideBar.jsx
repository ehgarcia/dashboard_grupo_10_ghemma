import React, { Fragment } from "react";
import logo from "../assets/images/logo-DH.png";
import { Link, Routes, Route } from "react-router-dom";
import { ContentWrapper } from "./ContentWrapper";
import NotFound404 from "./NotFound404";

export function SideBar() {
  return (
    <Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Ghemma</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<ContentWrapper />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Fragment>
  );
}
