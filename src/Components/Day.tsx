// LIBRARIES
import React from "react";
// STYLE
import './Day.css'
// COMPONENTS
import Slot from "./Slot";


// COMPONENT START
const Day = (props:any) => {
  return (
    <div>{props.date.toString()}</div>
  )
}

export default Day;