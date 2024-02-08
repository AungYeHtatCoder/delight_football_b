import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../userLayouts/UserLayout.css';

const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const Home = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('token');

  useEffect(() => {
    if (!auth) {
      navigate('/login'); // Navigate to login route if not authenticated
    }
  }, [auth, navigate]);

  let userBalance = '';
  let user = null;
  if (auth) {
    const authUser = localStorage.getItem('user');
    user = JSON.parse(authUser);
    const balance = user?.userData?.balance;
    userBalance = formatNumber(balance);
  }

  const NavLinkCard = ({ to, imgSrc, text }) => (
    <NavLink to={to} className="card w-100 text-decoration-none me-1">
      <img src={imgSrc} className="mx-auto mt-2" width="40px" height="40px" alt="" />
      <p className="text-dark">{text}</p>
    </NavLink>
  );

  return user && user.userData ? (
    <div className="container-fluid py-4">
      <marquee behavior="" className="mt-3 text-white" direction="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, numquam.
      </marquee>
      <div className="card px-3 pb-3 fs-5 fw-bold ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center mt-3">
            <i className="fa-regular fa-user-circle text-dark" style={{ fontSize: '55px' }}></i>
            <div className="ms-4">
              <h5 className="mt-1 fw-bold text-dark">{user?.userData?.name}</h5>
              <h5 className="mt-1 fw-bold text-dark">{userBalance} Ks</h5>
            </div>
          </div>
          <div className="">
            <i className="fa-solid fa-rotate text-dark" style={{ fontSize: '30px' }}></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLinkCard to={"/maung"} imgSrc="img/football/pitch.png" text="မောင်း" />
        <NavLinkCard to={"/bodyGoal"} imgSrc="img/football/football.png" text="ဘော်ဒီ/ဂိုးပေါင်း" />
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLinkCard to={"/BetHistory"} imgSrc="img/football/history.png" text="လောင်းထားသောပွဲစဉ်" />
        <NavLinkCard to={"/match"} imgSrc="img/football/schedule.png" text="ပွဲစဉ်ဟောင်းများ" />
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLinkCard to={"/cashTransferHistory"} imgSrc="img/football/coins.png" text="ငွေစာရင်း" />
        <NavLinkCard to={"/goalResult"} imgSrc="img/football/medical-result.png" text="ပွဲပြီးရလဒ်များ" />
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLinkCard to={"/"} imgSrc="img/football/pitch.png" text="3D/4D" />
        <NavLinkCard to={"/cashTransfer"} imgSrc="img/football/cash-flow.png" text="ငွေ/အကြောင်းကြား" />
      </div>
      {/* Repeat for other sections, using NavLinkCard to reduce redundancy */}
    </div>
  ) : null;
};

export default Home;
