import React from 'react'

function Navbar() {
  return (
    <div className=' w-full flex justify-between'>
      <div className=' w-full border  border-black'>
        <img src='logo.png' className=' pl-6' width={160} height={160}/>
      </div>
      <div className=' w-full border border-red-500 flex justify-end gap-5 items-center'>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
    </div>
  )
}

export default Navbar
