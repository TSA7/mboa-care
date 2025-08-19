import React, { useEffect, useState } from 'react'

function Achievement({color, number, unit, subtitle}) {
    const [dynamicNumber, setDynamicNumber] = useState(0)
    useEffect(()=>{
        if(dynamicNumber < number){
            const timer = setTimeout(() => {
                            setDynamicNumber(dynamicNumber + 1)
                        }, 50);
            return ()=> clearTimeout(timer)
        }
    }, [dynamicNumber])
  return (
    <div style={{color:color}} className=' bg-white rounded-lg w-full'>
        <p className=' text-center text-[30px] lg:text-[40px] font-bold'>{dynamicNumber} {unit}</p>
        <p className=' text-center text-[16px] lg:text-[20px]'>{subtitle}</p>
    </div>
  )
}

export default Achievement
