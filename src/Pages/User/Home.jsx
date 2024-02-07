import React from "react";
import "../userLayouts/UserLayout.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid py-4">

      <marquee behavior="" className="mt-3 text-white" direction="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        numquam.
      </marquee>
      <div className="card px-3 pb-3 fs-5 fw-bold ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i
              className="fa-regular fa-user-circle text-dark"
              style={{ fontSize: "55px" }}
            ></i>
            <div className="ms-4">
              <h5 className="mt-1 fw-bold text-dark">Angel Angel</h5>
              <h5 className="mt-1 fw-bold text-dark">500,000Ks</h5>
            </div>
          </div>
          <div className="">
            <i
              class="fa-solid fa-rotate text-dark"
              style={{ fontSize: "30px" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLink to={"/maung"} className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/pitch.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">မောင်း</p>
        </NavLink>
        <NavLink to={"/bodyGoal"} className="card w-100 text-decoration-none">
          <img
            src="img/football/football.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ဘော်ဒီ/ဂိုးပေါင်း</p>
        </NavLink>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLink
          to={"/BetHistory"}
          className="card w-100 text-decoration-none me-1"
        >
          <img
            src="img/football/history.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">လောင်းထားသောပွဲစဉ်</p>
        </NavLink>
        <NavLink to="/match" className="card w-100 text-decoration-none">
          <img
            src="img/football/schedule.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ပွဲစဉ်ဟောင်းများ</p>
        </NavLink>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLink
          to={"/cashTransferHistory"}
          className="card w-100 text-decoration-none me-1"
        >
          <img
            src="img/football/coins.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ငွေစာရင်း</p>
        </NavLink>
        <NavLink to={"/goalResult"} className="card w-100 text-decoration-none">
          <img
            src="img/football/medical-result.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ပွဲပြီးရလဒ်များ</p>
        </NavLink>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <a href="#" className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/pitch.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">3D/4D</p>
        </a>
        <NavLink
          to={"/cashTransfer"}
          className="card w-100 text-decoration-none"
        >
          <img
            src="img/football/cash-flow.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ငွေ/အကြောင်းကြား</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
