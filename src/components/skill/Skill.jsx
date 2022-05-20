import React, { useState } from 'react'
import './Skill.css'

function Skill(props) {
  const [showMobileSkills, setShowMobileSkills] = useState(false);

  return (
    <div onClick={()=>setShowMobileSkills(!showMobileSkills)}>
        <div className="skill-header" onClick={props.onClickEvent}>
            {props.area}
        </div>
        <div className={showMobileSkills ? "mobile-skills" : "no-mobile-skills"}>
            {props.mobileSkills}
      </div>
    </div>
  )
}

export default Skill