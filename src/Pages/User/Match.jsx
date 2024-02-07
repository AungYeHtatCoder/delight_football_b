import React from "react";

const Match = () => {
  return (
    <div className="container-fluid pt-3" style={{ paddingBottom: "100px" }}>
      <div className="my-3">
        <p
          className="fs-6 fw-bold p-2"
          style={{
            color: "#fff",
            background:
            "#5732fcc3",
            border: "1px solid goldenrod",
            borderRadius: "5px",
          }}
        >
          World - FIFA World Cup (Quata Final)
        </p>
        <div className="mt-3 bg-dark pt-3">
          <p className="text-center">20 Nov 2023(Monday)</p>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              12<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Spain <span className="text-primary fw-bold h5 mx-3">2 - 1</span>{" "}
              England
            </h6>
          </div>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              3<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Japan <span className="text-primary fw-bold h5 mx-3">2 - 2</span>{" "}
              Sweden
            </h6>
          </div>
        </div>
        <div className="mt-3 bg-dark pt-3">
          <p className="text-center">29 Nov 2023(Tuesday)</p>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              00<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Korea <span className="text-primary fw-bold h5 mx-3">0 - 1</span>{" "}
              Spain
            </h6>
          </div>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              5<span className="mx-2">:</span>00PM
            </span>
            <h6>
              England{" "}
              <span className="text-primary fw-bold h5 mx-3">2 - 5</span> Japan
            </h6>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p
          className="fs-6 fw-bold p-2"
          style={{
            color: "#fff",
            background:
            "#5732fcc3",
            border: "1px solid goldenrod",
            borderRadius: "5px",
          }}
        >
          Spain Lega (Quata Final)
        </p>
        <div className="mt-3 bg-dark pt-3">
          <p className="text-center">12 Dec 2024 (Saturday)</p>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              12<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Spain <span className="text-primary fw-bold h5 mx-3">2 - 1</span>{" "}
              England
            </h6>
          </div>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              3<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Japan <span className="text-primary fw-bold h5 mx-3">2 - 2</span>{" "}
              Sweden
            </h6>
          </div>
        </div>
        <div className="mt-3 bg-dark pt-3">
          <p className="text-center">10 Dec 2024(Thursday)</p>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              00<span className="mx-2">:</span>30PM
            </span>
            <h6>
              Korea <span className="text-primary fw-bold h5 mx-3">0 - 1</span>{" "}
              Spain
            </h6>
          </div>
          <div
            className="p-3 d-flex justify-content-around align-items-center"
            style={{ borderBottom: "1px solid gold" }}
          >
            <span>
              5<span className="mx-2">:</span>00PM
            </span>
            <h6>
              England{" "}
              <span className="text-primary fw-bold h5 mx-3">2 - 5</span> Japan
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
