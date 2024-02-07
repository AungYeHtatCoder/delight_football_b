import React from "react";
import Footer from "../userLayouts/Footer";

const CashTransferHistory = () => {
  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <h5 className="text-center">ငွေစာရင်း</h5>
        <div className="d-flex justify-content-between mt-3 fw-bold">
          <p>08-01-2024 အဖွင့်လက်ကျန်</p>
          <p>35,000</p>
        </div>
        <div className="card mt-3 shadow">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-end">
              08-01-2024
            </h5>
            <div className="row p-2">
              <div className="col-6">
                <p className="card-text text-dark">သွင်းငွေ</p>
                <p className="card-text text-dark">ပြန်ရငွေ</p>
                <p className="card-text text-dark">လောင်းငွေ</p>
                <p className="card-text text-dark">ထုတ်ငွေ</p>
                <p className="card-text text-dark">လက်ကျန်</p>
              </div>
              <div className="col-6">
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">1500.0</p>
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">33,500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3 shadow">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-end">
              08-01-2024
            </h5>
            <div className="row p-2">
              <div className="col-6">
                <p className="card-text text-dark">သွင်းငွေ</p>
                <p className="card-text text-dark">ပြန်ရငွေ</p>
                <p className="card-text text-dark">လောင်းငွေ</p>
                <p className="card-text text-dark">ထုတ်ငွေ</p>
                <p className="card-text text-dark">လက်ကျန်</p>
              </div>
              <div className="col-6">
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">1500.0</p>
                <p className="card-text text-dark">0.0</p>
                <p className="card-text text-dark">33,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashTransferHistory;
