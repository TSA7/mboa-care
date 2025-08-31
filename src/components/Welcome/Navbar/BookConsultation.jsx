import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function BookConsultation() {
  return (
      <button style={{backgroundColor:'rgba(232, 93, 4, 0.97)'}} className='text-white py-2 px-1 shakebutton rounded-full cursor-pointer text-[12px] lg:text-sm w-40 lg:w-44'><Link to='/consultation'>BOOK CONSULTATION</Link></button>
  )
}

export default BookConsultation
