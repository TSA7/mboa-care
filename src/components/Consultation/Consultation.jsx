import React, { useRef } from 'react'
import Navbar from '../Welcome/Navbar/Navbar'

function Consultation() {
    const navHeight = useRef()
    const heighvalue = navHeight.current?.clientHeight
  return (
    <div>
      <div ref={navHeight}><Navbar /></div>
      <div style={{height:`calc(100vh - ${heighvalue}px)`}}></div>
    </div>
  )
}

export default Consultation
