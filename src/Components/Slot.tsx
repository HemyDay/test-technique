// LIBRARIES
import React, { useState } from "react"
// STYLE
import './Slot.css'
// COMPONENTS

// TYPES
interface Appointment {
  start: Date;
  end: Date;
}

// COMPONENT START
const Slot: React.FC<{ appointment: Appointment }> = ({ appointment }) => {

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  // Function to determine the background color depending on the number of clicks
  const getBackgroundColor = () => {
    switch (clickCount % 4) {
      case 1:
        return 'black';
      case 2:
        return '#0D9276';
      case 3:
        return '#40A2E3';
      default:
        return 'default';
    }
  };

  return (
    <p 
      className="Slot"
      onClick={handleClick}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {appointment.start.toLocaleTimeString('fr-FR', {hour:'numeric', minute:'numeric'})}
    </p>
  )
}

export default Slot;