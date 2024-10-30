// LIBRARIES
import React from "react";
// STYLE
import './Day.css'
// COMPONENTS
import Slot from "./Slot";

// COMPONENT START
const Day = (props:any) => {
  return (
    <div className="Day">
      <div className="DateStringDisplay">
        <p style={{color:'gray'}}>{props.date.toLocaleDateString('fr-FR',{ weekday: 'short'})}</p>
        <p style={{fontWeight:'bold'}}>{props.date.toLocaleDateString('fr-FR', { day:'numeric', month:'short'})}</p>
      </div>

    </div>
    
  )
}

export default Day;