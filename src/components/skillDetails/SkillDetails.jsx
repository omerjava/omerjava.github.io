import React from 'react'
import './SkillDetails.css'

function SkillDetails(props) {
  return (
    <div className='details'>
       <span className='details-header'>{props.area}</span>
       <span className='details-info'>{props.detail}</span> 
    </div>
  )
}

export default SkillDetails