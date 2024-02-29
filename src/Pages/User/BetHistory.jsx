import React, { useState } from "react";
import useData from "../../hooks/useData";
import BASE_URL from "../../hooks/baseURL";
import Spin from "../../components/Spin";
import { Link } from "react-router-dom";

const BetHistory = () => {
  const [url, setUrl] = useState(BASE_URL + "/slips")
  const {data, loading} = useData(url);
  const bets = data.data;
  const pages = data.meta;
  console.log(bets);


  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <h5 className="text-center mt-4">လောင်းထားသောပွဲစဉ်များ</h5>
        <div className="row mt-3 pb-3" style={{ fontSize: "small" }}>
        {
          loading && <Spin />
        }

        {bets && bets.length > 0 ? (
          <>          
          {bets.map((bet, index) => (
            <Link to={'/betHistoryDetail/' + bet.uuid} key={index} className="card mt-3 shadow text-dark text-decoration-none">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-end">
                  <div className="text-dark" style={{ "fontSize" : "16px" }}>
                    <i className="fas fa-calendar text-dark me-2"></i>
                    {bet.created_at}
                  </div>
                </h5>
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">အမှတ်စဥ်</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text text-dark">{bet.uuid.slice(0, 8)}</p>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">အမျိုးအစား</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text text-dark">{bet.bettable_type == "single" ? "ဘော်ဒီ" : "မောင်း"}</p>
                  </div>
                </div>
                {bet.bettable_type != "single" && (
                  <div className="row p-2">
                      <div className="col-6">
                        <p className="card-text text-dark">မောင်း(အကြိမ်ရေ)</p>
                      </div>
                      <div className="col-6">
                          <p className="card-text text-dark">{bet.parlay_bets_count} မောင်း</p>
                      </div>
                  </div>
                )}
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">လောင်းငွေ</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text text-dark">{bet.amount} Ks</p>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">ပြန်ရငွေ</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text text-dark">{bet.payout} {bet.payout > 0 ? "Ks" : ""}</p>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">နိုင်/ရှုံး</p>
                  </div>
                  <div className="col-6">
                    <p className={`badge text-bg-${bet.status == "ongoing" ? "warning" : "success"}`}>{bet.status == "ongoing" ? "Pending" : "Completed"}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* pagination codes */}
          {pages && (
            <div className="d-flex justify-content-center mt-4">
                <div className='m-1'>
                    <button onClick={() => setUrl(pages.links[0].url)} className="btn btn-outline-light" disabled={pages.current_page === 1}>
                    <i className="fas fa-angle-left"></i>
                    </button>
                </div>
                {pages.links && pages.links.slice(1, -1).map((page, index) => (
                <div key={index} className='m-1'>
                    <button className={`btn ${page.active ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setUrl(page.url)}>
                    {page.label}
                    </button>
                </div>
                ))}
                <div className='m-1'>
                    <button onClick={() => setUrl(pages.links[pages.links.length-1].url)} className="btn btn-outline-light" disabled={pages.current_page === (pages.links.length-2)}>
                    <i className="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
          )}
          {/* pagination codes */}
          </>
        ):
        <p className="text-center text-info">လောင်းထားသော ပွဲစဥ်များ မရှိသေးပါ။</p>
        }


        </div>
      </div>
    </>
  );
};

export default BetHistory;
