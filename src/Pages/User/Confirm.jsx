import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../hooks/baseURL';
import SmallSpinner from '../../components/smallspinner';

export default function Confirm() {
    const confirm = JSON.parse(localStorage.getItem('confirm'));
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();
    // console.log(confirm);
    const handleCancle = (e) =>{
        e.preventDefault();
        localStorage.removeItem('confirm');
        navigate('/');
    }
    const handleConfirm = (e) =>{
        e.preventDefault();
        setLoader(true);
        fetch(BASE_URL + '/singles/'+ confirm.uuid + "/confirm", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization' : "Bearer " + localStorage.getItem('token')
            },
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
              localStorage.removeItem('confirm');
              setLoader(false);
              toast.success("အောင်မြင်ပါသည်။" , {
                position: toast.TOP_RIGHT,
                style: {
                  backgroundColor: 'black',
                },
              });
              navigate('/');
          })
          .catch(error => {
            console.error(error);
          });
    }
  return (
    <div className='container-fluid bg-secondary p-3 rounded shadow'>
        <ToastContainer />
      <h6 className='text-center'>အတည်ပြုရန်</h6>
      <div className="row mt-4">
        {/* 1 */}
        <div className="col-6">
            <p>လောင်းကြေး</p>
        </div>
        <div className="col-6">
            <p><b>{confirm && confirm.bettable.amount} MMK</b></p>
        </div>
        {/* 2 */}
        <div className="col-6">
            <p>အမျိုးအစား</p>
        </div>
        <div className="col-6">
            <p><b>{confirm && confirm.bettable_type == "single" ? "ဘော်ဒီ" : "မောင်း"}</b></p>
        </div>
        {/* 3 */}
        <div className="col-6">
            <p>Possible Payout</p>
        </div>
        <div className="col-6">
            <p>{confirm && confirm.bettable.possible_payout} MMK</p>
        </div>
        {/* 4 */}
        <div className="col-6">
            <p>Status</p>
        </div>
        <div className="col-6">
            <p className={`badge text-bg-${confirm && confirm.bettable.status == "pending" ? 'warning' : 'success'}`}>{confirm && confirm.bettable.status}</p>
        </div>
        {/* 5 */}
        <div className="col-6">
            <p>အိမ်ရှင်အသင်း</p>
        </div>
        <div className="col-6">
            <p>{confirm && confirm.bettable.home_team.name}</p>
        </div>
        {/* 6 */}
        <div className="col-6">
            <p>အဝေးအသင်း</p>
        </div>
        <div className="col-6">
            <p>{confirm && confirm.bettable.away_team.name}</p>
        </div>
        {/* 7 */}
        <div className="col-6">
            <p>Type</p>
        </div>
        <div className="col-6">
            <p><b>{confirm && confirm.bettable.type == "ou" ? "Over/Under" : "Upper/Lower"}</b></p>
        </div>
        {/* 8 */}
        <div className="col-6">
            <p>Selected Side</p>
        </div>
        <div className="col-6">
            <p>{confirm && confirm.bettable.type == "ou" ? confirm.bettable.ou_selected_side : confirm.bettable.ab_selected_side}</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-danger me-3" onClick={handleCancle}>ဖျက်မည်။</button>
        <button className="btn btn-dark" onClick={handleConfirm}>
            {loader && <SmallSpinner />}
            လောင်းမည်။
        </button>
      </div>
    </div>
  )
}
