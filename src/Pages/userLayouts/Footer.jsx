import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="fixedBottom">
      <div className="row">
        <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 footer-border-purple footer-border">
          <div className="d-flex justify-content-around align-items-center text-center py-2">
            <small className="text-white">မောင်း 1</small>
            <small>|</small>
            <small className="text-white">လောင်းငွေ</small>

            <input type="number" className="form-control form-control-sm w-25 bg-white" placeholder="ပမာဏ" />
            <div>
            <button className="btn btn-sm btn-outline-light mt-3"><small>လောင်းမည်</small></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
