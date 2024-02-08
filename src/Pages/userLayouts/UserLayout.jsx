import React from "react";
import "./UserLayout.css";
import logo from "../../assets/img/logo.png";


import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const UserLayout = () => {

  let navigate = useNavigate();

  let logout = (e) =>{
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div className="container-fluid" id="allBgColor">
      <div className="row">
        <div className="text-center pt-4">
          <Link to="/">
          <img
          className="rounded-circle"
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
          </Link>
          <div className="mt-3 mb-0">
            <button className="btn btn-sm btn-dark" onClick={logout}>Log Out</button>
          </div>
        </div>

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
