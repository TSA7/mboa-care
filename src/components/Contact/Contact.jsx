import React, { useRef } from 'react'
import Buble from '../Home/Buble.jsx'
import '../Home/home.css'
import './contact.css'
import Localisation from './Localisation.jsx'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const wordlenght = useRef()
  const lenghtvalue = wordlenght.current?.clientWidth
  const heightlenght = useRef()

  return (
    <div className='bg-white ' >
      <Buble color='white' heigh='28px' width='28px' className={'bubleAnimation1'}/>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation2'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation3'}/>
      <Buble color='white' heigh='28px' width='28px' className={'bubleAnimation4'}/>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation5'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation6'}/>
      <div className=' relative bottom-50 lg:bottom-20'>
        <div className=' w-full flex justify-center'>
          <div>
            <p className=' text-[50px] lg:text-[80px] font-semibold' style={{color:'rgba(2, 80, 44, 1)'}} ref={wordlenght}>Contact</p>
            <div className=' h-2 float-right relative bottom-3' style={{width:`${lenghtvalue/2}px`, backgroundColor:'rgba(2, 80, 44, 1)'}}></div>
          </div>
        </div>
        <div className=' w-full flex justify-center'>
          <p className=' w-4/5 lg:w-3/7 text-[20px] lg:text-[30px] text-center font-semibold py-6' style={{color:'rgba(2, 80, 44, 1)'}} >One step closer to better healthcare with MBOA Care Centre</p>
        </div>
        <div className=' flex justify-center'>
            <div  className=' flex justify-between flex-col lg:flex-row  items-center p-3 backgroundContact gap-10 mt-6 lg:mt-0' style={{borderRadius:'20px'}}>
              <img ref={heightlenght} src='contact.png'/>
              <div className=' flex flex-col gap-3'>
                <Localisation icon={<LocationOnIcon/>} classname={'locationBackground'} title={'Carrefour Mecque, Yaounde, Cameroon '}/>
                <Localisation classname={'clockBackground'} icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M582-298 440-440v-200h80v167l118 118-56 57ZM440-720v-80h80v80h-80Zm280 280v-80h80v80h-80ZM440-160v-80h80v80h-80ZM160-440v-80h80v80h-80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>} title={'7:00 AM to 10:00 PM'}/>
                <Localisation classname={'phoneBackground'} icon={<LocalPhoneIcon/>} title={'+237 658 18 2157'}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
