import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from "../../hooks/baseURL";
import useFetch from "../../hooks/useFetch";

const Footer = ({input}) => {
  
  const [amount, setAmount] = useState(0);
  const {data: user} = useFetch(BASE_URL + "/profile");

  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleMaung = (e) => {
    setLoader(true);
    e.preventDefault();
    if(amount <= 0){
      setLoader(false);
      toast.error('လောင်းကြေး ထည့်ပေးပါ။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black',
        },
      });
      return;
    }else if(amount < 1000){
      setLoader(false);
      toast.error('အနည်းဆုံး ၁၀၀၀ကျပ်လောင်းပေးပါ။', {
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
    }else if(input.length < 2){
      setLoader(false);
      toast.error('အနည်းဆုံး ၂ မောင်း နဲ့ အများဆုံး ၁၁ မောင်း ရွေးပေးပါ။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black',
        },
      });
      return;
    }else if(input.length > 11){
      setLoader(false);
      toast.error('အများဆုံး ၁၁ မောင်းပဲလောင်းနိုင်ပါသည်။', {
        position: toast.TOP_RIGHT,
        style: {
          backgroundColor: 'black',
        },
      });
      return;
    }else{
      const maungData = {
        amount: amount,
        bets: input,
      };
      fetch(BASE_URL + '/parlays', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(maungData)
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
            setLoader(false);
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
            setLoader(false);
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
          navigate('/maung-confirm');
          setLoader(false);
      })
      .catch(error => {
        console.error(error);
      });
    }
  };
  

  return (
    <footer id="footer" className="fixedBottom">
      <ToastContainer />
      <div className="row">
        <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 footer-border-purple footer-border">
          <div className="d-flex justify-content-around align-items-center text-center py-2">
            <small className="text-white">မောင်း {input.length}</small>
            <small>|</small>
            <small className="text-white">လောင်းငွေ</small>

            <input 
            type="number" 
            className="form-control form-control-sm w-25 bg-white" 
            placeholder="ပမာဏ" 
            onChange={(e)=>setAmount(e.target.value)}
            value={amount}
            />
            <div>
            <button className="btn btn-sm btn-outline-light mt-3" type="submit" onClick={handleMaung}><small>လောင်းမည်</small></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
