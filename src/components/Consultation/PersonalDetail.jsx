import React from 'react'

function PersonalDetail({userInfo, setUserInfo}) {
  return (
    <>
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
    </>
  )
}

export default PersonalDetail
