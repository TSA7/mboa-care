import React, { useState } from 'react'
import Navbar from '../components/Welcome/Navbar/Navbar'
import Form from '../components/Consultation/Form'
import Done from '../components/Consultation/Done'

function Consultation() {
  const ad = new Date()
  const [currParam, setCurrParam] = useState(1)
   const [userInfo, setUserInfo] = useState({
          firstName:'',
          lastName:'',
          phoneNumber:'',
          mailAddress:'',
          consultationType:'',
          preferredDate: ad.toISOString().split('T')[0],
          preferredTimeSlot:0,
          additionalNotes:'',
          file:[]
      }) 
  const hours =  Math.floor(userInfo.preferredTimeSlot/60) + 7
  const minutes = userInfo.preferredTimeSlot % 60
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours > 12 ? hours - 12 : hours
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`
  return (
    <>
      <Navbar setNavHeight={()=>{}}/>
      {currParam < 4 ?
        <Form timeString={timeString} userInfo={userInfo} setUserInfo={setUserInfo} currParam={currParam} setCurrParam={setCurrParam}/> :
        <Done userInfo={userInfo} timeString={timeString}/>
      }
    </>
  )
}

export default Consultation
