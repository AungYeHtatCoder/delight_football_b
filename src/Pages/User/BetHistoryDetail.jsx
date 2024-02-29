import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import Spin from '../../components/Spin';

export default function BetHistoryDetail() {
    const id = useParams();
    // console.log(id.uuid);
    const [loader, setLoader] = useState(false);
    const {data:bet, loading} = useFetch(BASE_URL + "/slips/" + id.uuid);
    console.log(bet);

  return (
    <>
        {loading && <Spin />}
        {
            bet.slip && (
                <>
                <div className='card border border-0 shadow rounded-3 p-3 text-dark mb-5'>
                    <div className="d-flex justify-content-between mb-3">
                        <small className='text-dark'>အမှတ်စဥ်</small>
                        <small className='text-dark'>{bet.slip.uuid.slice(0, 8)}</small>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <small className='text-dark'>အမျိုးအစား</small>
                        <small className='text-dark'>{bet.slip.bettable_type == 'parlay' ? "မောင်း" : "ဘော်ဒီ"}</small>
                    </div>
                    {bet.slip.bettable_type == 'parlay' && (
                        <div className="d-flex justify-content-between mb-3">
                            <small className='text-dark'>အရေအတွက်</small>
                            <small className='text-dark'>{bet.slip.bettable.parlay_bets.length} မောင်း</small>
                        </div>
                    )}
                    <div className="d-flex justify-content-between mb-3">
                        <small className='text-dark'>ပွဲစဥ်အခြေအနေ</small>
                        <small className={`${bet.slip.bettable.status == "ongoing" ? "badge text-bg-warning" : "badge text-bg-success"}`}>{bet.slip.bettable.status == "ongoing" ? "Pending" : "Completed"}</small>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <small className='text-dark'>လောင်းကြေး</small>
                        <small className='text-dark'>{bet.slip.bettable.amount} Ks</small>
                    </div>
                    <div className="d-flex justify-content-between">
                        <small className='text-dark'>ပြန်ရနိုင်သောပမာဏ</small>
                        <small className='text-dark'>{bet.slip.bettable.possible_payout} Ks</small>
                    </div>
                    {bet.slip.bettable_type == 'parlay' && <hr className='border border-dark' />}
                    
                    {bet.slip.bettable_type === "parlay" && bet.slip.bettable.parlay_bets.map((parlay, index)=> (
                        <div key={index}>
                            <div className="d-flex justify-content-between mb-2">
                                <small className='text-dark'>{parlay.home_team.name}</small>
                                <small className='text-dark'>{parlay.away_team.name}</small>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <small className='text-dark'>အမျိုးအစား</small>
                                <small className='text-dark'>{parlay.type === "ab" ? "Upper/Lower" : "Over/Under"}</small>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <small className='text-dark'>ပွဲစဥ် အခြေအနေ</small>
                                <small className={`${parlay.status === "ongoing" ? "badge text-bg-warning" : "badge text-bg-success"}`}>{parlay.status === "ongoing" ? "Pending" : "Completed"}</small>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <small className='text-dark'>လောင်းထားသော ဘက်</small>
                                <small className="text-dark">{parlay.type == "ab" ? parlay.ab_selected_side : parlay.ou_selected_side}</small>
                            </div>
                            <hr className='border border-secondary' />
                        </div>
                    ))}

                </div>
                </>
            )
        }
    </>


  )
}
