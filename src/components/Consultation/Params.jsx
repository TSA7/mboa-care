import React from 'react'

function Params({active, number, title}) {
  return (
    <div>
        <div className=' w-full flex justify-center mb-2'>
            <div className=' w-12 h-12 rounded-full flex justify-center items-center' style={{border:`2px solid rgba(2, 80, 44, 1)`, backgroundColor:active?'rgba(2, 80, 44, 1)':'white'}}>
                <p className='text-[29px]' style={{color:active? 'white':'rgba(2, 80, 44, 1)'}}>{number}</p>
            </div>
        </div>
        <p style={{color:active? 'rgba(2, 80, 44, 1)':'black'}}>{title}</p>
    </div>
  )
}

export default Params
