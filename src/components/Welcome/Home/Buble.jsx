import React from 'react'

function Buble({color, heigh, width, className, style={}}) {
  return (
<div className={`w-8 h-8 bg-white rounded-full relative z-20 ${className}`} style={{...style, backgroundColor:color, height:heigh, width}}></div>
  )
}

export default Buble
