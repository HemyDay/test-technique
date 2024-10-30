// LIBRARIES
import React, { useState } from "react"
// STYLE
import './Slot.css'
// COMPONENTS


// COMPONENT START
const Slot = (props:any) => {

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const getBackgroundColor = () => {
    switch (clickCount % 4) {
      case 1:
        return 'black';
      case 2:
        return 'green';
      case 3:
        return 'blue';
      default:
        return 'whitesmoke';
    }
  };

  return (
    <p 
      className="Slot"
      onClick={handleClick}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {props.date.start.toLocaleTimeString('fr-FR', {hour:'numeric', minute:'numeric'})}
    </p>
  )
}

export default Slot;