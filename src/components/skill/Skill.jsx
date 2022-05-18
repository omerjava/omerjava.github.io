import React from 'react'
import './Skill.css'

function Skill(props) {
  return (
    <div>
        <div className="skill-header" onClick={props.onClickEvent}>
            {props.area}
        </div>
    </div>
  )
}

export default Skill