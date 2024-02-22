import React from "react";
import Footer from "../userLayouts/Footer";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import PlayerSpinner from "../../components/PlayerSpinner";

const BodyGoal = () => {
  const {data: bodies, loading, error} = useFetch(BASE_URL + "/markets");
  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <h5 className="text-center mt-4">ဘော်ဒီ/ဂိုးပေါင်း</h5>
        {loading && (
          <PlayerSpinner />
        )}
        {/* start */}
        {bodies && bodies.map ((body, index) => (
          <>
            <div className="pt-1 mt-2" key={index}>
              <p>
                <i className="fa fa-star pe-2"></i> {body.name}
              </p>
            </div>
            {body.fixtures && body.fixtures.map ((fixture, index) => (
              <div key={index} className="card shadow px-2 pt-2 pb-3 mb-3" style={{backgroundColor:'#cf7821'}}>
                <p className="text-white">ပွဲချိန် : {fixture.date_time}</p>
                <div className="d-flex">
                  <div className="box-1 d-flex justify-content-around align-items-center">
                    <p >{fixture.home_team.name}</p>
                    {fixture.home_team.id == fixture.market.handicap_team_id && (
                      <h5>
                        <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                          {fixture.market.ab}
                        </span>
                      </h5>
                    )}
                    
                  </div>
                  <div className="box-1 d-flex justify-content-around align-items-center">
                    {fixture.away_team.id == fixture.market.handicap_team_id && (
                      <h5>
                        <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                          {fixture.market.ab}
                        </span>
                      </h5>
                    )}
                    <p className="text-center">{fixture.away_team.name}</p>
                    
                  </div>
                </div>
                <div className="d-flex mt-1">
                  <div className="box-2">
                    {fixture.home_team.id == fixture.market.upper_team_id && (
                      <p>ဂိုးပေါ်</p>
                    )}
                    {fixture.home_team.id == fixture.market.lower_team_id && (
                      <p>ဂိုးအောက်</p>
                    )}
                  </div>
                  <div className="box-3">
                    <p className=" fw-bold">{fixture.market.ou}</p>
                  </div>
                  <div className="box-2">
                    {fixture.away_team.id == fixture.market.upper_team_id && (
                      <p>ဂိုးပေါ်</p>
                    )}
                    {fixture.away_team.id == fixture.market.lower_team_id && (
                      <p>ဂိုးအောက်</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
        {/* end */}
      </div>
      <Footer />
    </>
  );
};

export default BodyGoal;
