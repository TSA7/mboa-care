import React from 'react'
import FileUpload from './FileUpload';
import { Close } from '@mui/icons-material';

function AdditionalInfo({userInfo, setUserInfo, handleDelete}) {
    const [focus, setFocus] = React.useState(false);
  return (
    <>
       <div className='col-span-1 lg:col-span-2'>
            <p className=' font-semibold'>Additional Notes</p>
            <div onClick={()=> setFocus(true)} onPointerLeave={()=> setFocus(false)}  className='rounded-lg px-1' style={{border:`1px solid`, borderColor:focus? 'oklch(52.7% 0.154 150.069)':'rgba(0, 0, 0, 0.25)', backgroundColor:'rgba(0, 0, 0, 0.07)', resize:'none'}}>
                <textarea onBlur={() => setFocus(false)}   value={userInfo.additionalNotes} onChange={e => setUserInfo({...userInfo, additionalNotes:e.target.value})} className=' w-full py-2 outline-none' style={{resize:'none'}} rows={2}></textarea>
                <FileUpload userInfo={userInfo} setUserInfo={setUserInfo}/>
            </div>
        </div>
        <div className='flex justify-center  w-full col-span-1 lg:col-span-2'>
            <div >
                {userInfo.file && userInfo.file.map((f, i) => (
                    <div key={i} className=' flex items-center relative' style={{gap:'5px'}}>
                        <img src={URL.createObjectURL(f)}/>
                        <button onClick={()=> handleDelete(i)} className=' cursor-pointer absolute top-0 right-0'><Close sx={{backgroundColor:'black', borderRadius:'50%', color:'white'}}/></button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default AdditionalInfo
