import React from 'react'
import './footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div id='' className="background  text-white text-sm lg:text-[16px]">
      <div className=" flex justify-center">
        <img src='footerlogo.png' width={160} height={160}/>
      </div>
      <div className=' relative -top-5'>
        <p className=" text-center ">mail@gmail.com | +237 6 58 18 21 57</p>
        <p className=' text-center'>© {year} Nurse Name. All rights reserved. | Certified Healthcare Professional</p>
      </div>
      <div ></div>
    </div>
  )
}

export default Footer
