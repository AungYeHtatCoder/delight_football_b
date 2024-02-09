import React from "react";
import "../userLayouts/UserLayout.css";
import Footer from "../userLayouts/Footer";

const Maung = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ minHeight: "100vh", paddingBottom: "120px" }}
      >
        <h5 className="text-center mt-4">မောင်း</h5>
        <div className="pt-1 mt-2">
          <p>
            <i className="fa fa-star pe-2"></i> AFC Cup
          </p>
        </div>
        <div className="card shadow px-2 pt-2 pb-3 " style={{backgroundColor:'#cf7821'}}>
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around align-items-center">
              <p >မာဇီယာ SRC</p>
              <h5>
                <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                  1-10
                </span>
              </h5>
            </div>
            <div className="box-1">
              <p className="text-center">ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p className=" fw-bold">4 + 60</p>
            </div>
            <div className="box-2">
              <p>ဂိုးအောက်</p>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <p>
            <i className="fa fa-star pe-2"></i> Turkiye Lig3
          </p>
        </div>
        <div className="card shadow px-2 pt-2 pb-3" style={{backgroundColor:'#cf7821'}}>
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around align-items-center">
              <p>မာဇီယာ SRC</p>
              <h5>
                <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                  1-10
                </span>
              </h5>
            </div>
            <div className="box-1">
              <p className="text-center">ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p className="fw-bold">4 + 60</p>
            </div>
            <div className="box-2">
              <p>ဂိုးအောက်</p>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <p>
            <i className="fa fa-star pe-2"></i> Bulgaria B PFG
          </p>
        </div>
        <div className="card shadow px-2 pt-2 pb-3" style={{backgroundColor:'#cf7821'}}>
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around align-items-center">
              <p>မာဇီယာ SRC</p>
              <h5>
                <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                  1-10
                </span>
              </h5>
            </div>
            <div className="box-1">
              <p className="text-center">ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p className="fw-bold">4 + 60</p>
            </div>
            <div className="box-2">
              <p>ဂိုးအောက်</p>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <p>
            <i className="fa fa-star pe-2"></i> Turkiye Lig3
          </p>
        </div>
        <div className="card shadow px-2 pt-2 pb-3" style={{backgroundColor:'#cf7821'}}>
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around align-items-center">
              <p>မာဇီယာ SRC</p>
              <h5>
                <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                  1-10
                </span>
              </h5>
            </div>
            <div className="box-1">
              <p className="text-center">ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p className="fw-bold">4 + 60</p>
            </div>
            <div className="box-2">
              <p>ဂိုးအောက်</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maung;
