import React from 'react'

function Service({icon, color, title, description, bordercolor}) {
  return (
    <div style={{border:'2px solid rgba(251, 118, 32, 1)',backgroundColor:'white'}} className=' rounded-lg p-3'>
      <div className=' flex justify-center'>
        <div style={{backgroundColor:color,  border:'2px solid', borderColor:bordercolor,}} className=' flex justify-center items-center w-12 h-12  rounded-full '>
            {icon}   
        </div>
      </div>
      <p className=' text-center font-semibold text-[28px]'>{title}</p>
      <p className=' text-justify lg:text-center text-[18px]'>{description}</p>
    </div>
  )
}

export default Service
