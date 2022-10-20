import React from 'react'

export default function Button({text}) {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
        <button type="button" className="btn btn-primary">{text}</button>
    </div>
    
  )
}
