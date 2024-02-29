import React, { useState } from "react";
import "../userLayouts/UserLayout.css";
import Footer from "../userLayouts/Footer";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import Spinner from "../../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Maung = () => {
  const {data: maungs, loading} = useFetch(BASE_URL + "/markets");
  
  const [input, setInput] = useState([]);
  const [error, setError] = useState(false);

  const betInput = (id, type, side) => {
    const existingIndex = input.findIndex(bet => bet.market_id === id);
    if (side == false) {
      swal("", "လောင်းရန် အချက်အလက်မရှိပါ။","error");
      return;
    }
    if(input.length > 10){
      toast.error('အများဆုံး ၁၁ မောင်းသာ လက်ခံပါတယ်။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black',
        },
      });
      return;
    }

    if (existingIndex !== -1) {
      // If a bet with the same market_id exists, update it if type or selected_side is different
      if (input[existingIndex].type !== type || input[existingIndex].selected_side !== side) {
        setInput(prev => {
          const updatedInput = [...prev];
          updatedInput[existingIndex] = { ...updatedInput[existingIndex], type, selected_side: side };
          return updatedInput;
        });
      }
    } else {
      // If a bet with the same market_id does not exist, add it
      setInput(prev => [...prev, { market_id: id, type, selected_side: side }]);
    }
  };
  console.log(input);
  
  return (
    <>
      <div className="container-fluid" style={{ minHeight: "100vh", paddingBottom: "120px" }}>
      <ToastContainer />
      <div className="d-flex justify-content-center">
        <h5 className="text-center mt-4">မောင်း <i className="fas fa-rotate" style={{ "cursor" : "pointer" }} onClick={()=>setInput([])}></i></h5>
      </div>
        
        {/* start */}
        {loading && (
          <Spinner />
        )}
        {maungs && maungs.map ((maung, index) => (
          <div key={index}>
            <div className="pt-1 mt-2">
              <p>
                <i className="fa fa-star pe-2"></i> {maung.name}
              </p>
            </div>
            {maung.fixtures && maung.fixtures.map ((fixture, index) => (
              <div key={index} className="card shadow px-2 pt-2 pb-3 mb-3" style={{backgroundColor:'#cf7821'}}>
                <p className="text-white">ပွဲချိန် : {fixture.date_time}</p>
                <div className="d-flex">
                  <div className={`box-1 d-flex justify-content-around align-items-center ${fixture.market.ab && input.some((bet) => bet.market_id == fixture.market.id && bet.type == "ab" && bet.selected_side == (fixture.market.upper_team_id == fixture.home_team.id ? "upper" : "lower")) && 'bg-dark'}`}
                  onClick={()=>
                    betInput(fixture.market.id, "ab", fixture.market.ab !== "" && (fixture.market.upper_team_id == fixture.home_team.id ? "upper" : "lower"))
                  }
                  >
                    <input type="checkbox" 
                    className="d-none"
                    
                    />
                    <p >{fixture.home_team.name}</p>
                    {fixture.home_team.id == fixture.market.handicap_team_id && (
                      <h5>
                        <span className="badge" style={{ backgroundColor: "#3e3e3e" }}>
                          {fixture.market.ab}
                        </span>
                      </h5>
                    )}
                    
                  </div>
                  <div className={`box-1 d-flex justify-content-around align-items-center ${fixture.market.ab && input.some((bet) => bet.market_id == fixture.market.id && bet.type == "ab" && bet.selected_side == (fixture.market.upper_team_id == fixture.away_team.id ? "upper" : "lower")) && 'bg-dark'}`}
                  onClick={()=>
                    betInput(fixture.market.id, "ab", fixture.market.ab !== "" && (fixture.market.upper_team_id == fixture.away_team.id ? "upper" : "lower"))
                  }
                  >
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
                  <div className={`box-2 ${fixture.market.ou && input.some((bet) => bet.market_id == fixture.market.id && bet.type == "ou" && bet.selected_side == "over") && 'bg-dark'}`}
                  onClick={()=>betInput(fixture.market.id, "ou", fixture.market.ou !== "" && "over")}>
                    <p>ဂိုးပေါ်</p>
                  </div>
                  <div className="box-3 bg-secondary rounded">
                    <p className=" fw-bold">{fixture.market.ou}</p>
                  </div>
                  <div className={`box-2 ${fixture.market.ou && input.some((bet) => bet.market_id == fixture.market.id && bet.type == "ou" && bet.selected_side == "under") && 'bg-dark'}`}
                  onClick={()=>betInput(fixture.market.id, "ou", fixture.market.ou !== "" && "under")}>
                      <p>ဂိုးအောက်</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        ))}
        {/* end */}
      </div>
      <Footer input={input} />
    </>
  );
};

export default Maung;