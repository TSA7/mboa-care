import { ArrowBack, Check } from '@mui/icons-material'
import React from 'react'
import Confetti from 'react-confetti-boom'
import { Link } from 'react-router-dom';

function Done({userInfo, timeString}) {
  return (
    <div className=' w-screen relative top-32 h-screen flex justify-center'>
      <div className=' w-9/10 lg:w-1/2'>
      <Confetti />
      <Confetti />
      <Confetti />
      <Confetti />
        <div className=' w-full flex justify-center'>
        <div className=' w-32 h-32 rounded-full flex justify-center items-center' style={{backgroundColor:'rgba(2, 144, 79, 1)'}}>
            <Check sx={{color:'white', fontSize:'60px'}}/>
        </div>
      </div>
        <p className=' my-5 text-center text-[22px] lg:text-[32px]' style={{color:'rgba(2, 80, 44, 1)'}}>Your consultation has been booked!</p>
        <p className='text-center text-[16px]' style={{color:'rgba(2, 144, 79, 1)'}}>Thank you for choosing MBOA Care Centre</p>
        <p className=' text-[20px] mt-3' style={{color:'rgba(2, 80, 44, 1)'}}>Consultation Details</p>
        <div style={{border:'2px solid rgba(0, 145, 79, 1)', fontSize:21}} className=' rounded-lg p-2 grid grid-cols-1 lg:grid-cols-2'>
            <p>Name: <span>{userInfo.firstName}</span></p>
            <p>Consultation Type: <span>{userInfo.consultationType}</span> </p>
            <p>Phone Number: <span>{userInfo.phoneNumber}</span></p>
            <p>Date: <span>{userInfo.preferredDate}</span></p>
            <p>Mail: <span>{userInfo.mailAddress}</span></p>
            <p>Time: <span>{timeString}</span></p>
        </div>
        <div className=' w-full flex justify-center'>
            <button className='text-white text-[20px] py-2 px-1 rounded-lg mt-7' style={{backgroundColor:'rgba(0, 97, 52, 1)'}}><Link to="/"> <ArrowBack sx={{color:'white'}}/> Let's go back </Link></button>
        </div>
      </div>
    </div>
  )
}

export default Done
