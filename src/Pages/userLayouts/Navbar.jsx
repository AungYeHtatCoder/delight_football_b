import React from "react";
import "./UserLayout.css";
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 py-2 fixed-top"
          id="top-nav"
        >
          <div className="d-flex justify-content-between px-3">
            <button onClick={() => navigate(-1)} className="btn">
              <i
                className="fa-solid fa-arrow-left"
                style={{ fontSize: "25px" }}
              ></i>
            </button>
            <Link to={"/"} className="text-decoration-none">
              <span className="">
                <img src={logo} width={50} alt="" />
              </span>
            </Link>
            <div>
              {/* <i className="fas text-white fa-bell me-1"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
