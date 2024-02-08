import React from "react";
import "./UserLayout.css";
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div class="row">
        <div
          class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 py-2 fixed-top"
          id="top-nav"
        >
          <div class="d-flex justify-content-between px-3">
            <button onClick={() => navigate(-1)} className="btn">
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "25px" }}
              ></i>
            </button>
            <Link to={"/"} class="text-decoration-none">
              <span class="">
                <img src={logo} width={50} alt="" />
              </span>
            </Link>
            <div>
              {/* <i class="fas text-white fa-bell me-1"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
