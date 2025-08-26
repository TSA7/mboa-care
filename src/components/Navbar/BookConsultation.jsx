import React from 'react'
import './navbar.css'

function BookConsultation() {
  return (
    <div className='relative'>
      <div className=' w-7 h-7 shakebutton bg-black rounded-full absolute -right-3 -top-3'></div>
      <button style={{backgroundColor:'rgba(232, 93, 4, 0.97)'}} className=' boxshadow text-white py-2 px-1 rounded-full cursor-pointer text-[12px] lg:text-sm w-40 lg:w-44'>BOOK CONSULTATION</button>
    </div>
  )
}

export default BookConsultation
