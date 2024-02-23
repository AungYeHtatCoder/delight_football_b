import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import Spin from "../../components/Spin";

const BetHistory = () => {
  const {data: bets, loading} = useFetch(BASE_URL + "/slips");
  console.log(bets);
  


  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <h5 className="text-center mt-4">လောင်းထားသောပွဲစဉ်များ</h5>
        <div className="row mt-3 pb-3" style={{ fontSize: "small" }}>
        {
          loading && <Spin />
        }
          {bets && bets.map((bet, index) => (
            <div key={index} className="card mt-3 shadow text-dark" style={{backgroundColor:'#bbb'}}>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-end">
                  {bet.created_at}
                </h5>
                <div className="row p-2">
                  <div className="col-6">
                    <p className="card-text text-dark">BetId</p>
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
                          <p className="card-text text-dark">{bet.parlay_bets_count}</p>
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
                    <p className="badge text-bg-primary">{bet.status.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BetHistory;
