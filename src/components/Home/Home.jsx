import React from 'react'
import './home.css'
import Buble from './Buble'

function Home({navHeight}) {
  return (
    <div style={{backgroundColor:'rgba(214, 231, 223, 1)', height:`calc(100vh - ${navHeight}px)`}} >
      <p>hi Stive, welcome!</p>
      <div className=' w-8 h-8 bg-black rounded-full border bubleAnimation1'></div>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation2'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation3'}/>
    <Buble color='rgba(255, 255, 255, 1)' heigh='30px' width='30px' className={'bubleAnimation4'}/>
    </div>
  )
}

export default Home
