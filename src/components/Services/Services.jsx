import React, { useRef } from 'react'
import Service from './Service'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function Services() {
  const barwidth = useRef()
    const widthValue = barwidth.current?.clientWidth
  return (
    <div style={{backgroundColor:'rgba(214, 231, 223, 1)'}} className='heightbody2 relative bottom-20 lg:bottom-0'>
      <div className=' flex justify-center'>
        <div>
            <p ref={barwidth} className=' font-semibold text-[50px] lg:text-[80px] ' style={{color:'rgba(2, 80, 44, 1)'}}>Services</p>
            <div className=' h-2 lg:h-2 relative bottom-3 lg:bottom-4' style={{backgroundColor:'rgba(2, 80, 44, 1)', width:`${widthValue/2}px`}}></div>
        </div>
      </div>
      <div className=' w-full flex justify-center'>
        <p style={{color:'rgba(2, 80, 44, 1)'}} className=' w-8/9 lg:w-1/3  text-center text-[20px] lg:text-[30px]'>Comprehensive medical care designed to meet all your healthcare needs.</p>
      </div>
      <div className=' mt-5 w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/10 lg:w-3/4 '>
            <Service icon={<MedicalServicesIcon sx={{color:'white'}}/>} color='rgba(251, 118, 32, 1)' bordercolor={'rgba(149, 70, 19, 0.01)'} title={'General Medical Consultation'} description={'Comprehensive health assessments and medical advice for all your healthcare needs.'}/>
            <Service icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M539-80q-28 0-52.5-12T445-126L227-403l19-20q20-21 48-25t52 11l74 45v-408q0-17 11.5-28.5T460-840q17 0 29 11.5t12 28.5v552l-97-60 104 133q6 8 14 11.5t17 3.5h221q33 0 56.5-23.5T840-240v-280q0-17 11.5-28.5T880-560q17 0 28.5 11.5T920-520v280q0 66-47 113T760-80H539Zm21-360v-200q0-17 11.5-28.5T600-680q17 0 28.5 11.5T640-640v200h-80Zm140 0v-160q0-17 11.5-28.5T740-640q17 0 28.5 11.5T780-600v160h-80ZM180-560q-58 0-99-40t-41-98q0-42 25-75.5t52-65.5l63-72 63 73q27 32 52 65t25 75q0 58-41 98t-99 40Zm0-80q25 0 42.5-17t17.5-41q0-27-18.5-46.5T185-784l-5-5-5 5q-18 20-36.5 39.5T120-698q0 24 17.5 41t42.5 17Zm470 320ZM180-715Z"/></svg>} bordercolor={'rgba(188, 57, 8, 1)'} color='rgba(188, 57, 8, 1)' title={'Vital Signs Monitoring'} description={'Accurate monitoring of blood pressure, heart rate, temperature, and other vital health signs.'}/>
            <Service icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M480-80q-83 0-141.5-58.5T280-280v-360q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640v360q0 83-58.5 141.5T480-80ZM280-720h400v-80H280v80Zm200 560q50 0 85-35t35-85H480v-80h120v-80H480v-80h120v-120H360v360q0 50 35 85t85 35ZM280-720v-80 80Z"/></svg>} color='rgba(188, 57, 8, 1)' bordercolor={'rgba(251, 118, 33, 1)'} title={'Rapid Diagnostic Tests'} description={'Accurate rapid diagnostic tests covering malaria, HIV, dengue, typhoid, and several health concerns.'}/>
            <Service icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M480-254 330-104q-23 23-56 23t-56-23L104-218q-23-23-23-56t23-56l150-150-150-150q-23-23-23-56t23-56l114-114q23-23 56-23t56 23l150 150 150-150q23-23 56-23t56 23l114 114q23 23 23 56t-23 56L706-480l150 150q23 23 23 56t-23 56L742-104q-23 23-56 23t-56-23L480-254Zm0-266q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm-170-16 114-114-150-150-114 114 150 150Zm90 96q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm80 80q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm80-80q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480q0 17 11.5 28.5T560-440Zm-24 130 150 150 114-114-150-150-114 114ZM339-621Zm282 282Z"/></svg>} color='rgba(251, 118, 32, 1)' bordercolor={'rgba(149, 70, 19, 0.01)'} title={'Wound Care & Dressing'} description={'Comprehensive wound care and clean dressing solutions for comfort, healing, and protection.'   }/>  
            <Service icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-240h120v-40h80v160h-80v-40h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40v40h-80v-160h80v40h120v240q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160q75 0 127.5-52.5T720-340v-67q-35-12-57.5-43T640-520q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T800-407v67q0 108-76 184T540-80Zm220-400q17 0 28.5-11.5T800-520q0-17-11.5-28.5T760-560q-17 0-28.5 11.5T720-520q0 17 11.5 28.5T760-480Zm0-40Z"/></svg>} color='rgba(251, 118, 32, 1)' bordercolor={'rgba(149, 70, 19, 0.01)'} title={'Clinical Examination'} description={'Professional clinical examinations and routine health checks for your comfort and care.'}/>
            <Service icon= {<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(255, 255, 255, 1)"><path d="M760-80q-33 0-56.5-23.5T680-160v-44q-69-14-114.5-68.5T520-400v-200q0-33 23-56.5t57-23.5h240q33 0 56.5 23.5T920-600v200q0 73-45.5 127.5T760-204v44h120v80H760Zm30-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6Zm-70 160q39 0 70-22.5t43-57.5h-43q-33 0-62.5-14.5T678-416q-9-11-21.5-17.5T630-440h-30v40q0 51 34.5 85.5T720-280Zm-42-184ZM320-60l-80-60v-160h-40q-33 0-56.5-23.5T120-360v-300q-17 0-28.5-11.5T80-700q0-17 11.5-28.5T120-740h120v-60h-20q-17 0-28.5-11.5T180-840q0-17 11.5-28.5T220-880h120q17 0 28.5 11.5T380-840q0 17-11.5 28.5T340-800h-20v60h120q17 0 28.5 11.5T480-700q0 17-11.5 28.5T440-660v300q0 33-23.5 56.5T360-280h-40v220ZM200-360h160v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60H200v300Z"/></svg>} color='rgba(188, 57, 8, 1)' bordercolor={'rgba(251, 118, 33, 1)'} title={'IV Infusion & Monitoring'} description={'Safe IV infusion and careful monitoring services for hydration, recovery, and better health.'}/>    
        </div>
      </div>
    </div>
  )
}

export default Services
