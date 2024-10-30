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
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  // Function to determine the background color depending on the number of clicks
  const getBackgroundColor = () => {
    if (isHovered) return { backgroundColor: 'black', color : 'white' };

    switch (clickCount % 4) {
      case 1:
        return { backgroundColor: 'black', color : 'white' };
      case 2:
        return { backgroundColor: '#0D9276', color : 'white' };
      case 3: 
        return { backgroundColor: '#40A2E3', color : 'white' };
      default:
        return { backgroundColor: '#F7F7F8', color : 'black' };
    }
  };

  return (
    <p 
      className="Slot"
      onClick={handleClick}
      style={getBackgroundColor()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {appointment.start.toLocaleTimeString('fr-FR', {hour:'numeric', minute:'numeric'})}
    </p>
  )
}

export default Slot;