import React from 'react'

function Localisation({icon, classname, title}) {
  return (
    <div className={` w-full flex flex-row items-center justify-center text-white gap-3 rounded-full  px-2 py-2 ${classname}`}>
      <p className=' flex-none'>{icon}</p>
      <p className=' flex-1 text-center text-[16px]'>{title}</p>
    </div>
  )
}

export default Localisation
