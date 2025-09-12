import React, { useRef } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Reference from './Reference';
import Bubles from '../Home/Bubles';
function About() {
  const imgheight = useRef()
  return (
    <div className=' relative bottom-40 lg:bottom-0 z-20' style={{backgroundColor:'white'}}>
      <Bubles/>
      <div className=' w-full   flex justify-center relative bottom-0  lg:bottom-30'>
        <div className='  w-9/10 lg:w-3/4 '>
          <h1 style={{color:'rgba(232, 93, 4, 1)'}} className=' font-semibold text-[45px] lg:text-[70px] mb-4'>About</h1>
          <div  className=' w-full  flex items-center lg:hidden'>
              <img  src='about.png'/>
          </div>
          <div className='flex justify-between'>
            <div  className=' w-full  hidden lg:flex items-center'>
              <img style={{height:`320px`}} src='about.png'/>
            </div>
            <div className=' w-full  p-2'>
              <div ref={imgheight}>
                <p className=' text-justify'>I am Nurse Name, a certified healthcare professional with over 8 years of experience in providing quality medical care. Based in Yaoundé, I am passionate about delivering personalized healthcare services that prioritize your comfort and well-being.</p>
                <p className='my-5 text-justify'>My approach combines clinical expertise with genuine compassion, ensuring that every patient receives not just medical care, but also emotional support and understanding during their healing journey.</p>
                <p className=' text-justify'>I am passionate about delivering personalized healthcare services that prioritize your comfort and well-being.</p>
                <div className='flex flex-col lg:flex-row justify-between gap-2.5 lg:gap-0 mt-5'>
                  <Reference color='rgba(232, 93, 4, 1)' icon={<FavoriteBorderIcon sx={{color:'white'}}/>} text={'Compassionate Care'}/>
                  <Reference color='rgba(239, 35, 60, 1)' icon={<HealthAndSafetyIcon sx={{color:'white'}}/>} text={'Patient Safety'}/>
                  <Reference color='rgba(0, 145, 79, 1)' icon={<MedicalServicesIcon sx={{color:'white'}}/>} text={'Quality Services'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
