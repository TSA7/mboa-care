import React from 'react'
import './home.css'

function Home({navHeight}) {
  return (
    <div style={{backgroundColor:'rgba(214, 231, 223, 1)', height:`calc(100vh - ${navHeight}px)`}} >
      <p>hi Stive, welcome!</p>
    </div>
  )
}

export default Home
