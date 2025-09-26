import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Params({active, number, title}) {
  return (
    <div>
        <div className=' w-full flex justify-center mb-2'>
            <div className=' w-9 h-9 lg:w-12 lg:h-12 rounded-full flex justify-center items-center' style={{border:`2px solid rgba(2, 80, 44, 1)`, backgroundColor:active?'rgba(2, 80, 44, 1)':'white'}}>
                { active ? <CheckIcon sx={{color:'white'}}/> : <p className='text-[19px] lg:text-[29px]' style={{color:active? 'white':'rgba(2, 80, 44, 1)'}}>{number}</p>}
            </div>
        </div>
        <p className=' text-center' style={{color:active? 'rgba(2, 80, 44, 1)':'black'}}>{title}</p>
    </div>
  )
}

export default Params
