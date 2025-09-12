import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';


function FileUpload({setUserInfo, userInfo}) {
  return (
    <div>
      <input className='hidden' onChange={(e)=>setUserInfo({...userInfo, file:Object.values(e.target.files)})} multiple type='file' id='file'/>
      <label className='cursor-pointer' htmlFor='file'><AttachFileIcon sx={{color:'rgba(2, 80, 44, 1)', transform:`rotate(90deg)`}}/></label>
    </div>
  )
}

export default FileUpload
