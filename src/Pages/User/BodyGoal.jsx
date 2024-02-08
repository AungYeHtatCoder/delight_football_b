import React from "react";
import Footer from "../userLayouts/Footer";

const BodyGoal = () => {
  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <h5 className="text-center mt-4">ဘော်ဒီ/ဂိုးပေါင်း</h5>
        <div className="pt-1 mt-4 ">
          <p>
            <i className="fa fa-star pe-2"></i> AFC Cup
          </p>
        </div>
        <div className="card shadow text-center bg-dark px-2 pt-2 pb-3">
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around">
              <p className="d-flex align-items-center">မာဇီယာ SRC</p>
              <h5>= -5</h5>
            </div>
            <div className="box-1">
              <p>ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p>4 + 60</p>
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
        <div className="card shadow text-center bg-dark px-2 pt-2 pb-3">
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around">
              <p>မာဇီယာ SRC</p>
              <h5>= -25</h5>
            </div>
            <div className="box-1">
              <p>ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p>4 + 60</p>
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
        <div className="card shadow text-center bg-dark px-2 pt-2 pb-3">
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1">
              <p>မာဇီယာ SRC</p>
            </div>
            <div className="box-1 d-flex justify-content-around">
              <p>ATK မိုဟန် B</p>
              <h5>= -5</h5>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p>4 + 60</p>
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
        <div className="card shadow text-center bg-dark px-2 pt-2 pb-4">
          <p className="text-white">ပွဲချိန် : 11-12-2023 4:30 PM</p>
          <div className="d-flex">
            <div className="box-1 d-flex justify-content-around align-items-center">
              <p>မာဇီယာ SRC</p>
              <h5>1 - 25</h5>
            </div>
            <div className="box-1">
              <p>ATK မိုဟန် B</p>
            </div>
          </div>
          <div className="d-flex mt-1">
            <div className="box-2">
              <p>ဂိုးပေါ်</p>
            </div>
            <div className="box-3">
              <p>4 + 60</p>
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

export default BodyGoal;
