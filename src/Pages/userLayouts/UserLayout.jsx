import React from "react";
import "./UserLayout.css";
import logo from "../../assets/img/logo/logo.png";


import { Link, Outlet, useLocation } from "react-router-dom";
const UserLayout = () => {
  const location = useLocation();
  return (
    <div className="container-fluid" id="allBgColor">
      <div className="row">
      <div className="text-center">
        <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        />
        </Link>
      </div>
        {/* {location.pathname != "/" ? <Navbar /> : ""} */}
        <div
          className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12"
          id="main"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
