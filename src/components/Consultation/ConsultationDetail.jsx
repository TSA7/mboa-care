import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

function ConsultationDetail({userInfo, setUserInfo}) {
  return (
    <>
        <div className='col-span-1 lg:col-span-2'>
            <p>Consultation Type</p>
            <select value={userInfo.consultationType} onChange={e => setUserInfo({...userInfo, consultationType:e.target.value})} className=' outline-green-700 w-full py-2 rounded-lg px-1' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}>
                <option value=''>Select Consultation Type</option>
                <option value='General_Checkup'>General Medical Consultation</option>
                <option value='Follow-up Visit'>Follow-up Visit</option>
                <option value='Specialist_Consultation'>Specialist Consultation</option>
                <option value='Emergency Care'>Emergency Care</option>
            </select>
        </div>
        <div className=''>
            <p>Preferred Date</p>
            <input type='date'  value={userInfo.preferredDate} onChange={e => setUserInfo({...userInfo, preferredDate:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
        </div>
        <div className=''>
            <p>Preferred Time Slot</p>
            <input value={userInfo.preferredTimeSlot} onChange={e => setUserInfo({...userInfo, phoneNumber:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}/>
        </div>
        <div className='col-span-1 lg:col-span-2'>
            <p>Additional Notes</p>
            <textarea  value={userInfo.additionalNotes} onChange={e => setUserInfo({...userInfo, additionalNotes:e.target.value})} className=' w-full py-2 rounded-lg px-1 outline-green-700' style={{border:`1px solid rgba(0, 0, 0, 0.25)`, backgroundColor:'rgba(0, 0, 0, 0.07)'}}>
            </textarea>
        </div>
    </>
  )
}

export default ConsultationDetail
