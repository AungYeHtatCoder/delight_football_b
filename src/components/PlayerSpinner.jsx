import React from 'react'
import player from '../assets/img/player.png';

export default function PlayerSpinner() {
  return (
    <div className='text-center'>
        <img src={player} className='w-75' alt="" />
    </div>
  )
}
