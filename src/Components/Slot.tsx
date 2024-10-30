// LIBRARIES
import React from "react";
// STYLE
import './Slot.css'
// COMPONENTS


// COMPONENT START
const Slot = (props:any) => {

  return (
    <p className="Slot">
      {props.date.start.toLocaleTimeString('fr-FR', { hour:'numeric', minute:'numeric'})}
    </p>
  )
}

export default Slot;