import React from 'react'

function Buble({color, heigh, width, className}) {
  return (
<div className={`w-8 h-8 bg-white rounded-full ${className}`} style={{backgroundColor:color, height:heigh, width}}></div>
  )
}

export default Buble
