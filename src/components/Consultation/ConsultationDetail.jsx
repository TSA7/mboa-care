import React from 'react'
import './consultation.css'

function ConsultationDetail({userInfo, setUserInfo, timeString}) {
    const percentage = Math.floor((userInfo.preferredTimeSlot/900)*100)
  return (
    <>
        <div className='col-span-1 lg:col-span-2'>
            <p className=' font-semibold'>Consultation Type</p>
            <select value={userInfo.consultationType} onChange={e => setUserInfo({...userInfo, consultationType:e.target.value})} className=' outline-green-700 w-full py-2 rounded-lg px-1' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}>
                <option value=''>Select Consultation Type</option>
                <option value='General_Checkup'>General Medical Consultation</option>
                <option value='Follow-up Visit'>Follow-up Visit</option>
                <option value='Specialist_Consultation'>Specialist Consultation</option>
                <option value='Emergency Care'>Emergency Care</option>
            </select>
        </div>
        <div className=''>
            <p className=' font-semibold'>Preferred Date<sup style={{color:'rgba(188, 57, 8, 1)', fontSize:16}}>*</sup></p>
            <input type='date'  value={userInfo.preferredDate} onChange={e => setUserInfo({...userInfo, preferredDate:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
        </div>
        <div className=' flex flex-col'>
            <p className=' font-semibold grow-0'>Preferred Time Slot<sup style={{color:'rgba(188, 57, 8, 1)', fontSize:16}}>*</sup></p>
            <div className='grow flex items-center '>
                <div  className=" w-full">
                    <div className='flex justify-between'>
                        <p>7:00 AM</p>
                        <p>{timeString}</p>
                        <p>10:00 PM</p>
                    </div>
                    <input style={{background:`linear-gradient(to right, #007A5E ${percentage}% , gray ${0}%)`}} type='range' min={0} max={900} value={userInfo.preferredTimeSlot} onChange={ (e) => setUserInfo({...userInfo, preferredTimeSlot:e.target.value})}  className=' w-full slider'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConsultationDetail
