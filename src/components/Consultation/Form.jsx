import React, {useState} from 'react'
import Params from './Params'

function Form() {
    const [currParam, setCurrParam] = useState(1)
    const currentTitle = ['Personal Info', 'Consultation Details', 'Additional info']
    const [userInfo, setUserInfo] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        mailAddress:''
    })  
    const validUserInfo = userInfo.firstName && userInfo.lastName && userInfo.phoneNumber && userInfo.mailAddress
    function handleSubmit(e){
        e.preventDefault()
    }
    function handleNext(){  
        if(currParam >3) return;
        setCurrParam(currParam + 1)
     }
  return (
    <div style={{height:`100vh`, backgroundColor:'rgba(214, 231, 223, 1)'}} className='w-full h-screen flex justify-center items-center'>
      <div className=' bg-white rounded-xl py-3 px-8 w-9/10 lg:w-1/2'>
        <h1 style={{color:'rgba(2, 80, 44, 1)', textAlign:'center'}} className='text-[32px] lg:text-[38px]'>Schedule Consultation</h1>
        <div className=' flex flex-row justify-between mt-5 mb-4'>
            <Params active={1 === currParam} number={1} title={'Personal Info'}/>
            <Params active={2 === currParam} number={2} title={'Consultation Details'}/>
            <Params active={3 === currParam} number={3} title={'Additional info'}/>
        </div>
        <p className='text-[27px] my-2 ' style={{color:'rgba(2, 80, 44, 1)'}}>{currentTitle[currParam-1]}</p>
        {currParam === 1 &&
        <form onSubmit={handleSubmit} className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
                <p>First Name</p>
                <input value={userInfo.firstName} onChange={e => setUserInfo({...userInfo, firstName:e.target.value})} className=' outline-green-700 w-full py-2 rounded-lg px-1' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}} />
            </div>
            <div>
                <p>Last Name</p>
                <input value={userInfo.lastName} onChange={e => setUserInfo({...userInfo, lastName:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
            </div>
            <div>
                <p>Phone Number</p>
                <input value={userInfo.phoneNumber} onChange={e => setUserInfo({...userInfo, phoneNumber:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
            </div>
            <div>
                <p>Mail Address</p>
                <input value={userInfo.mailAddress} onChange={e => setUserInfo({...userInfo, mailAddress:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
            </div>
        </form>}
        <button disabled={!validUserInfo} onClick={handleNext} style={{backgroundColor:validUserInfo? 'rgba(2, 80, 44, 1)':'rgba(2, 80, 44, 0.56)', cursor:validUserInfo?'pointer':'not-allowed'}} className=' float-right py-1 px-3 text-white mt-3 rounded-lg'>Next</button>
      </div>
    </div>
  )
}

export default Form
