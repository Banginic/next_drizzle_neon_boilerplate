import React from 'react'

function Logo({logoSize, textSize}: { logoSize: number, textSize: string}) {
  return (
    <div>
      
      <p className={`${textSize}`}>Logo</p>
    </div>
  )
}

export default Logo
