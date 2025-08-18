import React, {useEffect, useRef, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import './navbar.css'
import BookConsultation from './BookConsultation';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({setNavHeight}) {
  const [activeLink, setActiveLink] = useState(0);
  const links = ['Home', 'About', 'Services', 'Contact'];
  const [opened, setOpened] = useState(false);
  const navHeight = useRef(0)
  useEffect(() => {
    setTimeout(() => {
      setNavHeight(navHeight.current.clientHeight);

    }, 500);
  },[])

  return (
    <div className='relative' ref={navHeight}>
      <div className=' w-full flex justify-between shadow-bottom relative bottom-2'>
        <div className=' w-full'>
          <img src='logo.png' className=' pl-1 lg:pl-10' width={160} height={160}/>
        </div>
        <div className=' w-full justify-evenly gap-5 items-center hidden lg:flex'>
          {links.map((item, index) => (<button key={index} className={`${index === activeLink ? 'text-green-500 font-semibold':''} cursor-pointer text-lg`} onClick={()=>setActiveLink(index)}>{item}</button>))}
          <BookConsultation/>
        </div>
        <div className=' flex items-center lg:hidden w-full justify-end gap-2'>
        <BookConsultation/>
          <button onClick={()=>{setOpened(!opened);}} className=' pr-3 '>{opened? <CloseIcon/>: <DehazeIcon/>}</button>
        </div>
      </div>
      {opened &&  
        <div onClick={()=> setOpened(false)} className=' flex w-full absolute z-20 top-20 lg:hidden h-screen  overflow-hidden' style={{backgroundColor:'rgba(0, 0, 0, 0.10)'}}>
          <div  className=' bg-white h-32 border border-gray-300 w-full flex flex-col divide-y divide-gray-300'>
            {opened && links.map((item, index) => (
              <button key={index} className={`${index === activeLink ? 'text-green-500 font-semibold':''} cursor-pointer text-lg px-2`} onClick={(e)=>{ e.stopPropagation(); setActiveLink(index); setOpened(false)}}><p>{item}</p></button>
            ))}
          </div>
      </div>}
    </div>
  )
}

export default Navbar
