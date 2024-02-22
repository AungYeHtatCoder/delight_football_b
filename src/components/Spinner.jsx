import React from 'react'
import spinner from '../assets/img/ball.png';

export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={spinner} className='w-75' alt="" />
    </div>
  )
}
