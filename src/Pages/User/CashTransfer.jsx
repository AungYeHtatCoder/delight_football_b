import React from "react";
import "./GoalResult.css";
const CashTransfer = () => {
  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "200px" }}>
        <h5 className="text-center mt-4">ငွေအကြောင်း / ကြား</h5>
        <ul className="nav nav-pills mb-3 tab" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              ငွေသွင်း
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              ငွေထုတ်
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex={0}
          >
            <div className="d-flex">
              <p>အေးဂျင့် : </p>
              <p>mkzzymzmm</p>
            </div>

            <div>
              <p>ငွေလွဲရမည့်အကောင့်</p>
              <div
                className="p-4 rounded bg-dark"
              >
                <form action="" method="post">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">အမည်</label>
                    <input type="text" name="name" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-white">အကောင့် (သို့) ဖုန်း</label>
                    <input type="number" name="phone" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="amount" className="form-label text-white">ငွေပမာဏ</label>
                    <input type="number" name="amount" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="my-3">
                    <button className="btn btn-light w-100">ပို့မည်</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex={0}
          >
            <div className="d-flex">
              <p>အေးဂျင့် : </p>
              <p>mkzzymzmm</p>
            </div>

            <div>
              <p>ငွေထုတ်ရမည့်အကောင့်</p>
              <div
                className="p-4 rounded bg-dark"
              >
                <form action="" method="post">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">အမည်</label>
                    <input type="text" name="name" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-white">အကောင့် (သို့) ဖုန်း</label>
                    <input type="number" name="phone" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="amount" className="form-label text-white">ငွေပမာဏ</label>
                    <input type="number" name="amount" className="form-control bg-transparent text-white" placeholder="" />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-light w-100">ပို့မည်</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashTransfer;
