import React, {useState} from 'react'
import Params from './Params'

function Form() {
    const [currParam, setCurrParam] = useState(1)
    const currentTitle = ['Personal Info', 'Consultation Details', 'Additional info']
  return (
    <div style={{height:`100vh`, backgroundColor:'rgba(214, 231, 223, 1)'}} className='w-full flex justify-center items-center'>
      <div className=' bg-white rounded-xl py-3 px-8 w-1/2'>
        <h1 style={{color:'rgba(2, 80, 44, 1)', textAlign:'center'}} className='text-[38px]'>Schedule Consultation</h1>
        <div className=' flex flex-row justify-between mt-5 mb-10'>
            <Params active={1 === currParam} number={1} title={'Personal Info'}/>
            <Params active={2 === currParam} number={2} title={'Consultation Details'}/>
            <Params active={3 === currParam} number={3} title={'Additional info'}/>
        </div>
        <p className='text-[27px] my-4 ' style={{color:'rgba(2, 80, 44, 1)'}}>{currentTitle[currParam]}</p>
        <div className=' grid grid-cols-2'>
            
        </div>
      </div>
    </div>
  )
}

export default Form
