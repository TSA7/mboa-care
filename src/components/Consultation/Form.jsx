import React, {useState} from 'react'
import Params from './Params'
import PersonalDetail from './PersonalDetail'
import ConsultationDetail from './ConsultationDetail'

function Form() {
    const [currParam, setCurrParam] = useState(1)
    const currentTitle = ['Personal Info', 'Consultation Details', 'Additional info']
    const ad = new Date()
    const cb = currParam > 1
    const [userInfo, setUserInfo] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        mailAddress:'',
        consultationType:'',
        preferredDate: ad.toISOString().split('T')[0],
        preferredTimeSlot:'',
        additionalNotes:''
    })  
    const validUserInfo = !userInfo.firstName || !userInfo.lastName || !userInfo.phoneNumber || !userInfo.mailAddress
    // const validConsultationDetail = 
    function handleSubmit(e){
        e.preventDefault()
        console.log('done')
        if(currParam === 1 ){
            setCurrParam(prev => prev + 1)
            console.log('done')
        }
        else if(currParam === 2){
            setCurrParam(3)
        }  
    }

    const handleBack = () => {
        if(currParam === 1) return;
        setCurrParam(currParam - 1)
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
        <form onSubmit={handleSubmit}>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {currParam === 1 && <PersonalDetail handleSubmit={handleSubmit} userInfo={userInfo} setUserInfo={setUserInfo}/>}
                {currParam === 2 && <ConsultationDetail handleSubmit={handleSubmit} userInfo={userInfo} setUserInfo={setUserInfo}/>}
            </div>
            <div className=' flex justify-between'>
                <button onClick={()=> handleBack()} type='button' style={{backgroundColor:cb?'rgba(0, 0, 0, 0.25)':'white', color:cb?'black':'white'}} className='py-1 px-3 mt-3 rounded-lg cursor-pointer'>Back</button>
                <button disabled={validUserInfo} type='submit' style={{backgroundColor:!validUserInfo? 'rgba(2, 80, 44, 1)':'rgba(2, 80, 44, 0.56)', cursor:!validUserInfo?'pointer':'not-allowed'}} className=' float-right py-1 px-3 text-white mt-3 rounded-lg'>Next</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
