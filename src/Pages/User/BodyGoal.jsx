import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import PlayerSpinner from "../../components/PlayerSpinner";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/smallspinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BodyGoal = () => {
  const {data: bodies, loading} = useFetch(BASE_URL + "/markets");
  const {data: user} = useFetch(BASE_URL + "/profile");
  // console.log(bodies);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState("");
  const [isType1, setIsType1] = useState(false);
  const [isType2, setIsType2] = useState(false);
  const [input, setInput] = useState({});
  const [amount, setAmount] = useState(0);

  const handleSubmit = (amount, input) =>{
    
    setLoader(true);
    const inputData = {
      "amount" : amount,
      "bet" : input
    }
    // console.log(inputData);
    if (amount <= 0 || amount < 1000) {
      setLoader(false)
      toast.error('အနည်းဆုံး တစ်ထောင်ကျပ် ထည့်ပါ။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black',
        },
      });
      return;
    }else if(amount  > user.balance){
      setLoader(false);
      toast.error('လက်ကျန်ငွေ ထပ်ကျော်လွန်နေပါသည်။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black', // Set the text color to red
          // important: true, // Apply !important
        },
      });
      return;
    }
    fetch(BASE_URL + '/singles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(inputData)
    }).then(async response => {
      if (!response.ok) {
        setLoader(false);
        let errorData;
        try {
          errorData = await response.json();
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
  
        if (response.status === 422) {
          setErrMsg(errorData.message);
          setError(errorData.errors);

          toast.error(errorData.message , {
            position: toast.TOP_RIGHT,
            style: {
              backgroundColor: 'black',
            },
          });
          console.error(`${response.status}:`, errorData);
        }else if (response.status === 401) {
          console.error(`${response.status}:`, errorData);
          setError("");
          setErrMsg(errorData.message)
        }else{
          console.error(`${response.status}`);
        }
  
        throw new Error('Error');
      }
  
      return response.json();
    }).then(data => {
        console.log(data);
        localStorage.setItem('confirm', JSON.stringify(data.data));
        setData(data);
        navigate('/body-confirm');
        setLoader(false);
        
    })
    .catch(error => {
      console.error(error);
    });
    
  }


  return (
    <>
      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        <ToastContainer />
        <h5 className="text-center mt-4">ဘော်ဒီ/ဂိုးပေါင်း</h5>
        {loading && (
          <PlayerSpinner />
        )}
        {/* start */}
        {bodies && bodies.map ((body, index) => (
          <div key={index}>
            <div className="pt-1 mt-2">
              <p>
                <i className="fa fa-star pe-2"></i> {body.name}
              </p>
            </div>
            {body.fixtures && body.fixtures.map ((fixture, index) => (
              <div key={index} className="card shadow px-2 pt-2 pb-3 mb-3" style={{backgroundColor:'#cf7821'}}>
                <p className="text-white">ပွဲချိန် : {fixture.date_time}</p>
                <div className="d-flex">
                <div className={`box-1 d-flex justify-content-around align-items-center ${fixture.market.ab && fixture.home_team.id === activeItem && isType1 && 'bg-dark'}`} 
                  onClick={()=>[
                    setActiveItem(fixture.market.ab && fixture.home_team.id), 
                    setIsType1(true),
                    setIsType2(false)
                  ]}
                  >
                    <p 
                    onClick={()=>setInput({
                      "market_id" : fixture.market.id,
                      "type" : "ab",
                      "selected_side" : fixture.market.upper_team_id === fixture.home_team.id ? "upper" : "lower",
                    })}
                    >{fixture.home_team.name}</p>
                    {fixture.home_team.id == fixture.market.handicap_team_id && (
                      <h5>
                        <span className="badge text-bg-secondary">
                          {fixture.market.ab}
                        </span>
                      </h5>
                    )}
                    
                  </div>
                  <div className={`box-1 d-flex justify-content-around align-items-center ${fixture.market.ab && fixture.away_team.id === activeItem && isType1 && 'bg-dark'}`} 
                  onClick={()=>[
                    setActiveItem(fixture.market.ab && fixture.away_team.id),
                    setIsType1(true),
                    setIsType2(false)
                  ]}
                  >
                    {fixture.away_team.id == fixture.market.handicap_team_id && (
                      <h5>
                        <span className="badge text-bg-secondary">
                          {fixture.market.ab}
                        </span>
                      </h5>
                    )}
                    <p className="text-center"
                    onClick={()=>setInput({
                      "market_id" : fixture.market.id,
                      "type" : "ab",
                      "selected_side" : fixture.market.upper_team_id === fixture.away_team.id ? "upper" : "lower",
                    })}
                    >{fixture.away_team.name}</p>
                  </div>
                </div>
                <div className="d-flex mt-1">
                  <div className={`box-2 ${fixture.home_team.id === activeItem && fixture.market.ou && isType2 && 'bg-dark'}`}
                  onClick={()=>[
                    setActiveItem(fixture.market.ou && fixture.home_team.id),
                    setIsType1(false),
                    setIsType2(true)
                  ]}
                  >
                    <p
                      onClick={()=>setInput({
                        "market_id" : fixture.market.id,
                        "type" : "ou",
                        "selected_side" : "over",
                      })}
                      >ဂိုးပေါ်</p>
                  </div>
                  <div className="box-3 bg-secondary rounded">
                    <p className=" fw-bold">{fixture.market.ou}</p>
                  </div>
                  <div className={`box-2 ${fixture.away_team.id === activeItem && fixture.market.ou && isType2 && 'bg-dark'}`}
                  onClick={()=>[
                    setActiveItem(fixture.market.ou && fixture.away_team.id),
                    setIsType1(false),
                    setIsType2(true)
                  ]}
                  >
                      <p
                      onClick={()=>setInput({
                        "market_id" : fixture.market.id,
                        "type" : "ou",
                        "selected_side" : "over",
                      })}
                      >ဂိုးအောက်</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* end */}
      </div>
      <footer id="footer" className="fixedBottom">
      <div className="row">
        <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 footer-border-purple footer-border">
          <div className="d-flex justify-content-around align-items-center text-center py-2">
            <div>
                <small className="text-white">လောင်းငွေ</small>
            </div>
            <div>
                <input 
                type="number" 
                className="form-control form-control-sm w-100 bg-white" 
                placeholder="ပမာဏ"
                onChange={(e)=>setAmount(e.target.value)}
                value={amount}
                />
            </div>
            <div>
                <button onClick={()=>handleSubmit(amount, input)} type="submit" className="btn btn-sm btn-outline-light mt-3">
                  {loader && <SmallSpinner />}
                  <small>လောင်းမည်</small>
                </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default BodyGoal;
