import React from 'react'

function Reference({color, icon, text}) {
  return (
    <div className=' px-4 py-1 flex flex-row gap-3 items-center ' style={{color:color, border:'2px solid', borderColor:color, borderRadius:'28px'}}> 
      <div style={{backgroundColor:color}} className=' rounded-full w-10 h-8 p-5 flex items-center justify-center'>
        <p >{icon}</p>
      </div>
      <p className=' text-center w-full'>{text}</p>
    </div>
  )
}

export default Reference
